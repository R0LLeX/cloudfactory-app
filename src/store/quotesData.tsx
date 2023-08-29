import { makeAutoObservable, action, runInAction } from "mobx";
import axios from "axios";
import { QuotesCollection, QuotesDataType } from "./types";

class QuotesData {
    quotes: Array<QuotesDataType> = [];
    quotesCollection: QuotesCollection = {};
    isRequest = false;
    isError = false;
    constructor() {
        makeAutoObservable(this)
    }
    @action
    fetchTickerData = async () => {
        runInAction(() => this.isRequest = true);
        try {
            const response = await axios.get(
                'https://api.poloniex.com/markets/ticker24h'
            );
            this.transformQuotes(response.data);
        } catch (error) {
            runInAction(() => this.isError = true);
            console.error('Error fetching data:', error);
        } finally {
            runInAction(() => this.isRequest = false);
        }
    };

    transformQuotes = (refreshedQuotes: QuotesCollection) => {
        const quotesComp: QuotesDataType[] = Object.keys(refreshedQuotes).map((name: string) => {
            const currElement = this.quotesCollection[name];
            let isChanged = false;
            if (currElement) {
                isChanged =
                    currElement.low !== refreshedQuotes[name].low ||
                    currElement.high !== refreshedQuotes[name].high ||
                    currElement.dailyChange !== refreshedQuotes[name].dailyChange;
            }

            return { ...refreshedQuotes[name], isChanged };
        });
        this.quotesCollection = refreshedQuotes;
        this.quotes = quotesComp;
        this.isError = false;
    };

}

export default new QuotesData();
