import React from 'react';
import {useTheme} from 'styled-components/native';
import Header from '../../components/Header';
import Gender from '../../components/Gender';

import * as S from './styles';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.colors.barStyle}
      />
      <Header />

      <S.BoxSecondary>
        <Gender />

        <ButtonPrimary title="Calculate your BMI" />
      </S.BoxSecondary>
    </S.Container>
  );
};

export default Home;
