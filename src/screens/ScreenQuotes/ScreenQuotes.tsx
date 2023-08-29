import { View, FlatList, ActivityIndicator, Animated, ListRenderItemInfo, Text } from "react-native";
import React, { useEffect } from "react";
import { Keys, ScreenNavigatorProps } from "../../navigation/types";
import { observer} from "mobx-react-lite";
import quotes from "../../store/quotesData"
import { styles } from "./styles";
import { useFocusEffect } from "@react-navigation/native";
import { Error } from "./components/Error/Error";
import { QuotesDataType } from "../../store/types";
import { Colors } from "../../constants";

export const ScreenQuotes: React.FC<ScreenNavigatorProps<Keys.Quotes>> = observer (() => {
    const isFilledData = !!quotes.quotes?.length;
    const isError = quotes.isError;
    const fadeAnim = new Animated.Value(0);

    useEffect(() => {
        quotes.fetchTickerData().then();
    }, []);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 3,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    }, [fadeAnim]);

    useFocusEffect(() => {
        const fetchDataInterval = setInterval(quotes.fetchTickerData, 5000);
        return () => clearInterval(fetchDataInterval);
    });

    const renderQuoteItem = ({ item }: ListRenderItemInfo<QuotesDataType> ) => {
        const colorInterpolation = fadeAnim.interpolate({
            inputRange: [0, 1, 2, 3],
            outputRange: [Colors.gray02, Colors.gray03, Colors.gray02, Colors.gray03],
        });
        const color = Number(item.dailyChange) > 0 ? Colors.green : Colors.red;
        const backgroundColor = item.isChanged ? colorInterpolation : 'transparent';

        return (
            <Animated.View style={[styles.WrapperCell, { backgroundColor }]}>
                <View style={styles.ContainerContent}>
                    <Text style={styles.TitleCell}>{item.displayName}</Text>
                    <Text style={styles.Price} numberOfLines={1}>{item.low}</Text>
                    <Text style={styles.Price} numberOfLines={1}>{item.high}</Text>
                    <Text style={[styles.DailyChange, { color }]}>{`${item.dailyChange}%`}</Text>
                </View>
            </Animated.View>
        )
    }

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
                    keyExtractor={(item) => item.symbol}
                />
            )}
        </View>
    )
})
