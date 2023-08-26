import { Dimensions, StyleSheet } from 'react-native'

const screenWidth = Dimensions.get('window').width
export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:'#FFF',
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
    WrapperButton: {
        width: screenWidth - 40,
        height: 80,
        backgroundColor: '#835CF0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    TitleButton: {
        fontSize: 18,
        color: '#FFF'
    }
})
