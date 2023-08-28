import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Ionicons from "react-native-vector-icons/Ionicons";
import { RootStackParamList } from "../../types";
import { styles } from "./styles"

export const HeaderLeft = ({ navigation }: { navigation: StackNavigationProp<RootStackParamList> }) => {
  const goBack = (
      <TouchableOpacity style={styles.GoBackButton} onPress={navigation.goBack}>
        <Ionicons name={'arrow-back'} size={25} />
      </TouchableOpacity>
  );

  return {
    headerLeft: () => goBack,
  };
};
