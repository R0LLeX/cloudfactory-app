import { makeAutoObservable, action, configure } from 'mobx';
import axios from 'axios';
import { QuotesCollection, QuotesDataType } from './types';

configure({
    enforceActions: 'never',
})

class QuotesData {
    public quotes: Array<QuotesDataType> = [];
    public isError = false;
    private _quotesCollection: QuotesCollection = {};

    constructor() {
        makeAutoObservable(this)
    }

    @action
    public fetchQuotesData = async () => {
        try {
            const response = await axios.get('https://api.poloniex.com/markets/ticker24h');
            this._transformQuotes(response.data);
        } catch (error) {
            this.isError = true;
            console.error('Error fetching data:', error);
        }
    };

    private _transformQuotes = (refreshedQuotes: QuotesCollection) => {
        const quotesComp: QuotesDataType[] = Object.keys(refreshedQuotes).map((name: string) => {
            const currElement = this._quotesCollection[name];
            let isChanged = false;
            if (currElement) {
                isChanged =
                    currElement.low !== refreshedQuotes[name].low ||
                    currElement.high !== refreshedQuotes[name].high ||
                    currElement.dailyChange !== refreshedQuotes[name].dailyChange;
            }

            return { ...refreshedQuotes[name], isChanged };
        });
        this._quotesCollection = refreshedQuotes;
        this.quotes = quotesComp;
        this.isError = false;
    };

}

export default new QuotesData();
