import React, {useState, useContext} from 'react';
import {ThemeContext} from 'styled-components/native';

import * as S from './styles';

export type Props = {
  focused?: boolean;
  toggleTheme(): void;
};

const Home: React.FC<Props> = ({focused = false, toggleTheme}) => {
  const {colors, title} = useContext(ThemeContext);

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
        backgroundColor={colors.background}
        barStyle={title === 'dark' ? 'light-content' : 'dark-content'}
      />
      <S.Header>
        <S.Title>BMI Calculator</S.Title>

        <S.Switch
          onValueChange={toggleTheme}
          value={title === 'dark' ? true : false}
          trackColor={{false: colors.secondary, true: colors.secondary}}
          thumbColor={colors.primary}
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
