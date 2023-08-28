import { makeAutoObservable, action, runInAction, observable } from "mobx";
import axios from "axios";
import { QuotesDataType } from "./types";

class QuotesData {
    @observable quotes: Array<QuotesDataType> = [];
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
                // 'https://api.poloniex.com/public?command=returnTicker'
            );
            runInAction(() => {
                if (!!response.data?.length) {
                    this.quotes = response.data;
                    runInAction(() => this.isError = false);
                }
            })
        } catch (error) {
            runInAction(() => this.isError = true);
            console.error('Error fetching data:', error);
        } finally {
            runInAction(() => this.isRequest = false);
        }
    };

}

export default new QuotesData();
