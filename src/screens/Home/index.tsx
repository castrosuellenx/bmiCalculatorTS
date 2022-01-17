import React from 'react';
import {useTheme} from 'styled-components/native';
import Header from '../../components/Header';
import Gender from '../../components/Gender';

import * as S from './styles';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.title === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Header />

      <S.BoxSecondary>
        <Gender />
      </S.BoxSecondary>
    </S.Container>
  );
};

export default Home;
