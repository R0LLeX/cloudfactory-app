import {View, Text, FlatList, ActivityIndicator} from "react-native";
import React, { useEffect } from "react";
import { Keys, ScreenNavigatorProps } from "../../navigation/types";
import { observer} from "mobx-react-lite";
import quotes from "../../store/quotesData"
import { styles } from "./styles";

export const ScreenQuotes: React.FC<ScreenNavigatorProps<Keys.Quotes>> = observer (() => {

    useEffect(() => {
        quotes.fetchTickerData().then()
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={quotes.quotes}
                 renderItem={({ item, index }) => (
                    <View key={item.symbol} style={styles.item}>
                       <Text style={styles.itemText}>{item.symbol}</Text>
                        <Text style={styles.itemText}>{item.open}</Text>
                    </View>
                 )}
                 numColumns={3}
            />
        </View>
    )
})
