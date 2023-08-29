import { StyleSheet } from 'react-native'
import { Colors, screenWidth } from "../../../../constants";
export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center'
    },
    WrapperError: {
        borderColor: Colors.darkest,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: screenWidth / 3,
        marginTop: 1,
        width: screenWidth - 40
    },
    Title: {
        fontSize: 25,
        color: Colors.darkest,
    }
})
