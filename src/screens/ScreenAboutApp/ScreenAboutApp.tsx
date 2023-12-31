import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Keys } from "../../navigation/types";
import React from "react";
import { styles } from './styles'

export const ScreenAboutApp: React.FC = ({ navigation }) => (
      <View style={styles.Container}>
        <View style={styles.WrapperImage}>
           <Image style={styles.Image} source={require('../../assets/images/logo.png')} resizeMode={'contain'} />
        </View>
           <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate(Keys.Quotes)}
              style={styles.WrapperButton}>
              <Text style={styles.TitleButton}>Перейти к котировкам</Text>
           </TouchableOpacity>
      </View>
    );
