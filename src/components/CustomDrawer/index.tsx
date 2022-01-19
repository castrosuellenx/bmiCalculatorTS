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
import ButtonWithIcon from '../Buttons/ButtonWithIcon';
import {RFValue} from 'react-native-responsive-fontsize';

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

      <S.WrapperOptions>
        <S.WrapperSwitch>
          <SwitchTheme />
          <S.Divisor />
        </S.WrapperSwitch>

        <S.WrapperButtons>
          <ButtonWithIcon
            title="Share this app"
            icon="share"
            size={RFValue(21)}
            color={theme.colors.text}
            marginTop
          />

          <S.Divisor />

          <ButtonWithIcon
            title="About & Help"
            icon="info"
            size={RFValue(21)}
            color={theme.colors.text}
            marginTop
          />

          <S.Divisor />

          <ButtonWithIcon
            bold
            title="Sign Out"
            icon="logout"
            size={RFValue(21)}
            color={theme.colors.primary}
            marginTop
            marginBottom
          />
        </S.WrapperButtons>
      </S.WrapperOptions>
    </S.Container>
  );
};

export default CustomDrawer;
