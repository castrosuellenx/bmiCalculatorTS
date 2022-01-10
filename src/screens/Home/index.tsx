import React, {useState, useContext} from 'react';
import {useTheme} from 'styled-components/native';

import * as S from './styles';

export type Props = {
  toggleTheme(): void;
};

const Home: React.FC<Props> = ({toggleTheme}) => {
  const theme = useTheme();

  const [isMale, setIsMale] = useState(true);
  const [isFemale, setIsFemale] = useState(false);

  const onChooseMale = () => {
    if (!isMale) {
      setIsMale(true);
      setIsFemale(false);
    }
  };

  const onChooseFemale = () => {
    if (!isFemale) {
      setIsFemale(true);
      setIsMale(false);
    }
  };

  return (
    <S.Container>
      <S.StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.title === 'dark' ? 'light-content' : 'dark-content'}
      />
      <S.Header>
        <S.Title>BMI Calculator</S.Title>

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
      </S.Header>

      <S.BoxSecondary>
        <S.ContainGenders>
          <S.ChooseGender activeOpacity={0.8} onPress={onChooseMale}>
            <S.Gender focused={isMale}>Male</S.Gender>
          </S.ChooseGender>

          <S.ChooseGender activeOpacity={0.8} onPress={onChooseFemale}>
            <S.Gender focused={isFemale}>Female</S.Gender>
          </S.ChooseGender>
        </S.ContainGenders>
      </S.BoxSecondary>
    </S.Container>
  );
};

export default Home;
