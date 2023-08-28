import {StyleSheet, Dimensions} from 'react-native'

const screenWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center'
    },
    WrapperError: {
        borderColor: '#0E0E10',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: screenWidth / 3,
        marginTop: 1,
        width: screenWidth - 40
    },
    Title: {
        fontSize: 25,
        color: '#0E0E10',
        fontFamily: 'Helvetica'
    }
})
