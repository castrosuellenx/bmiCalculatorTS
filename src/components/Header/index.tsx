import React from 'react';
import {useTheme} from 'styled-components';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import * as S from './styles';
import SwitchTheme from '../../components/SwitchTheme';
import {MenuDark, MenuLight} from '../../assets';

const Home: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <S.Header>
      <S.MenuButton
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        {theme.title === 'dark' ? (
          <MenuDark height={'100%'} width={'100%'} />
        ) : (
          <MenuLight height={'100%'} width={'100%'} />
        )}
      </S.MenuButton>

      <S.Title>BMI Calculator</S.Title>

      <S.BoxToAlign />
    </S.Header>
  );
};

export default Home;
