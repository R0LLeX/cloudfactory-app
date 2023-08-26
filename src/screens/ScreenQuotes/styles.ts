import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    item: {
        borderColor: 'gray',
        borderWidth: 1,
        // backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        // margin: 1,
        height: Dimensions.get('window').width / 3,
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemText: {
        color: '#000',
    },
});
