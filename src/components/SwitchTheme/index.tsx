import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from 'styled-components/native';
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
    <>
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
    </>
  );
};

export default SwitchTheme;
