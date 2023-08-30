import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type ScreenNavigatorProps<T extends keyof RootStackParamList> = {
    navigation: StackNavigationProp<RootStackParamList, T>;
    route: RouteProp<RootStackParamList, T>;
};

export type RootStackParamList = AboutAppParamsList & QuotesParamsList;

export type AboutAppParamsList = {
    AboutApp: undefined;
};

export type QuotesParamsList = {
    Quotes: undefined;
};

export enum Keys {
    AboutApp =  'AboutApp',
    Quotes = 'Quotes',
}

export interface IconsDataType {
    [key: string]: {
        focusIcon: string;
        blurIcon: string;
        topLabel: string;
        tabBarLabel: string;
    }
}
