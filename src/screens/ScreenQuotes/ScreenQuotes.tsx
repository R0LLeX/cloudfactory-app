import { View, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { Keys, ScreenNavigatorProps } from "../../navigation/types";
import { observer} from "mobx-react-lite";
import quotes from "../../store/quotesData"
import { styles } from "./styles";
import { useFocusEffect } from "@react-navigation/native";
import { renderQuoteItem } from "./components/QuoteItem/renderQuoteItem";
import { Error } from "./components/Error/Error";
export const ScreenQuotes: React.FC<ScreenNavigatorProps<Keys.Quotes>> = observer (() => {
    const isFilledData = !!quotes.quotes?.length;
    const isError = quotes.isError;

    useEffect(() => {
        quotes.fetchTickerData().then();
    }, []);

    useFocusEffect(() => {
        const fetchDataInterval = setInterval(quotes.fetchTickerData, 5000);
        return () => clearInterval(fetchDataInterval);
    });

    return (
        <View style={styles.Container}>
            {isError && <Error />}
            {!isError && !isFilledData &&
                <View style={styles.WrapperLoading}>
                    <ActivityIndicator size={'large'} />
                </View>}
            {!isError && isFilledData && (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={quotes.quotes}
                    renderItem={renderQuoteItem}
                    numColumns={3}
                />
            )}
        </View>
    )
})
