import { ListRenderItemInfo, Text, View } from "react-native";
import { styles } from "./styles";
import React from "react";
import { QuotesDataType } from "../../../../store/types";

export const renderQuoteItem = ({ item }: ListRenderItemInfo<QuotesDataType> ) => {
    const colorChange = Number(item.dailyChange) > 0 ? '#00A200' : '#FF0968';

    return (
        <View key={item.symbol} style={styles.WrapperCell}>
            <View style={styles.ContainerContent}>
                <Text style={styles.TitleCell}>{item.displayName}</Text>
                <Text style={styles.Price} numberOfLines={1}>{item.low}</Text>
                <Text style={styles.Price} numberOfLines={1}>{item.high}</Text>
                <Text style={[styles.DailyChange, { color: colorChange }]}>{`${item.dailyChange}%`}</Text>
            </View>
        </View>
    )
}
