import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";
import { QuotesDataType } from "./types";

class QuotesData {
    quotes: Array<QuotesDataType> = []
    constructor() {
        makeAutoObservable(this)
    }
    fetchTickerData = async () => {
        try {
            const response = await axios.get(
                'https://api.poloniex.com/markets/ticker24h'
            );
            runInAction(() => {
                this.quotes = response.data;
            })
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

}

export default new QuotesData();
