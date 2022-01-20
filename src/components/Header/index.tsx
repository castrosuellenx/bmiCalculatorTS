import React from 'react';
import {useTheme} from 'styled-components';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

import * as S from './styles';

const Home: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <S.Header>
      <S.MenuButton
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Feather name="menu" size={RFValue(24)} color={theme.colors.text} />
      </S.MenuButton>

      <S.Title>BMI Calculator</S.Title>

      <S.BoxToAlign />
    </S.Header>
  );
};

export default Home;
