import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {useTheme} from 'styled-components/native';

import * as S from './styles';

import {images} from '../../assets/';
import SwitchTheme from '../SwitchTheme';
import {Switch} from 'react-native';

const CustomDrawer: React.FC<DrawerContentComponentProps> = ({...rest}) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.WrapperProfile>
        <S.UserPicture source={images.exampleUserPicture} />
        <S.UserName>John Doe</S.UserName>
      </S.WrapperProfile>

      <DrawerContentScrollView {...rest}>
        <DrawerItemList {...rest} />
      </DrawerContentScrollView>

      <SwitchTheme />
    </S.Container>
  );
};

export default CustomDrawer;
