import { Dimensions, StyleSheet } from "react-native"

const screenWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    WrapperCell: {
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: screenWidth / 3,
    },
    ContainerContent: {
        height: "70%",
        width: "100%",
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    TitleCell: {
        textAlign: 'center',
        color: '#0E0E10',
        fontSize: 18,
        fontWeight: "700",
    },
    DailyChange: {
        fontSize: 17,
        fontWeight: "500",
    },
    Price: {
        fontSize: 15,
        fontWeight: "500",
        color: '#6F6F79',
    }
})
