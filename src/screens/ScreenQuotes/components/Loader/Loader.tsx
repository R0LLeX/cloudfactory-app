import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";
import React from "react";

export const Loader = () => (
    <View style={styles.WrapperLoading}>
        <ActivityIndicator size={'large'} />
    </View>
)
