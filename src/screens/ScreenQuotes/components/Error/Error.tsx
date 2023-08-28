import {Text, View} from "react-native";
import {styles} from "./styles";

export const Error = () => (
    <View style={styles.Container}>
        <View style={styles.WrapperError}>
            <Text style={styles.Title}>Ошибка</Text>
        </View>
    </View>
)
