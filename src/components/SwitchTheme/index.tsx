import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';

import {toggleTheme} from '../../store/modules/theme/actions';

import * as S from './styles';

const SwitchTheme: React.FC = () => {
  const theme = useTheme();
  const {isDark} = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const onToggleTheme = () => {
    dispatch(toggleTheme(!isDark));
  };

  return (
    <S.Container>
      <MaterialIcons
        name="nights-stay"
        size={RFValue(21)}
        color={theme.colors.text}
      />

      <S.Title>Dark Theme</S.Title>

      <S.Switch
        onValueChange={onToggleTheme}
        value={theme.title === 'dark' ? true : false}
        trackColor={{
          false: theme.colors.secondary,
          true: theme.colors.secondary,
        }}
        thumbColor={theme.colors.primary}
        ios_backgroundColor="#3e3e3e"
      />
    </S.Container>
  );
};

export default SwitchTheme;
