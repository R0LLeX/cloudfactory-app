import {View, Text, TouchableOpacity, Image} from "react-native";
import { Keys, ScreenNavigatorProps } from "../../navigation/types";
import React from "react";
import { styles } from './styles'

export const ScreenAboutApp: React.FC<ScreenNavigatorProps<Keys.AboutApp>> = ({ navigation }) => (
      <View style={styles.Container}>
        <View style={styles.WrapperImage}>
           <Image style={{ width: '100%' }} source={require('../../assets/images/logo.png')} resizeMode={'contain'} />
        </View>
           <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate(Keys.Quotes)}
              style={styles.WrapperButton}>
              <Text style={styles.TitleButton}>Перейти к котировкам</Text>
           </TouchableOpacity>
      </View>
    );
