import { StyleSheet } from 'react-native'
import { Colors, screenWidth } from "../../constants";
export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    WrapperImage: {
        marginTop: -35,
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth - 40,
    },
    Image: {
        width: '100%',
    },
    WrapperButton: {
        width: screenWidth - 40,
        height: 80,
        backgroundColor: Colors.violet,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    TitleButton: {
        fontSize: 18,
        color: Colors.white,
    }
})
