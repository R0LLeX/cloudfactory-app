import { StyleSheet } from 'react-native'
import { Colors, screenWidth } from "../../constants";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    WrapperCell: {
        borderColor: Colors.gray,
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
        color: Colors.gray04,
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
        color: Colors.gray01,
    }
});
