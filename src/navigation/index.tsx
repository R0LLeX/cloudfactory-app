import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenAboutApp } from '../screens/ScreenAboutApp';
import { ScreenQuotes } from '../screens/ScreenQuotes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Keys, RootStackParamList, IconsDataType } from './types';
import { HeaderLeft } from './components/HeaderLeft/HeaderLeft';
import { Colors } from '../constants';
import { styles } from './styles'

const iconsData: IconsDataType = {
    [Keys.AboutApp]: { focusIcon: 'ios-information-circle', blurIcon: 'ios-information-circle-outline', tabBarLabel: 'Главная', topLabel: 'О приложении' },
    [Keys.Quotes]: { focusIcon: 'analytics', blurIcon: 'analytics', tabBarLabel: 'Котировки', topLabel: 'Котировки' }
}


const Tab = createBottomTabNavigator<RootStackParamList>();

export const AppBottomStackNavigator = () => {
    const { Screen, Group } = Tab;
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                title: iconsData[route.name].topLabel,
                tabBarLabel: iconsData[route.name].tabBarLabel,
                headerTitleAlign: 'center',
                tabBarLabelStyle: styles.TabBarLabelStyle,
                tabBarStyle: styles.TabBarStyle,
                tabBarActiveTintColor: Colors.violet,
                tabBarInactiveTintColor: Colors.darkest,
                tabBarIcon: ({ focused, color }) => {
                    const icon = focused ? iconsData[route.name].focusIcon : iconsData[route.name].blurIcon
                    return <Ionicons name={icon} size={30} color={color} />
                },
            })}>
            <Group>
                <Screen name={Keys.AboutApp} component={ScreenAboutApp} />
                <Screen name={Keys.Quotes} component={ScreenQuotes} options={HeaderLeft} />
            </Group>
        </Tab.Navigator>
    );
}
