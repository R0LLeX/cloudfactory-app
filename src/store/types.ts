export interface QuotesDataType {
    displayName: string,
    symbol: string;
    dailyChange: string;
    low: string,
    high: string,
    isChanged: boolean;
}

export type QuotesCollection = Record<string, QuotesDataType>;

