import React from 'react';
import {useTheme} from 'styled-components/native';
import Header from '../../components/Header';
import Gender from '../../components/Gender';

import * as S from './styles';

export type Props = {
  toggleTheme(): void;
};

const Home: React.FC<Props> = ({toggleTheme}) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.title === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Header toggleTheme={toggleTheme} />

      <S.BoxSecondary>
        <Gender />
      </S.BoxSecondary>
    </S.Container>
  );
};

export default Home;
