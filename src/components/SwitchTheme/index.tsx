import React from 'react';
import {useTheme} from 'styled-components/native';

import * as S from './styles';

export type Props = {
  toggleTheme(): void;
};

const SwitchTheme: React.FC<Props> = ({toggleTheme}) => {
  const theme = useTheme();

  return (
    <>
      <S.Switch
        onValueChange={toggleTheme}
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
