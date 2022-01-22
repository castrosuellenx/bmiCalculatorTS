import React, {useState} from 'react';
import {useTheme} from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import * as S from './styles';
import Header from '../../components/Header';
import Gender from '../../components/Gender';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';

const Home: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);

  const onCalculate = () => {
    setIsLoading(true);

    setTimeout(() => {
      navigation.navigate('Result');
    }, 400);
  };

  return (
    <S.Container>
      <S.StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.colors.barStyle}
      />
      <Header />

      <S.BoxSecondary>
        <Gender />

        <ButtonPrimary
          title="Calculate your BMI"
          loading={isLoading}
          onPress={onCalculate}
        />
      </S.BoxSecondary>
    </S.Container>
  );
};

export default Home;
