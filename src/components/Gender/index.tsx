import React, {useState} from 'react';
import {useTheme} from 'styled-components';

import * as S from './styles';
import {
  MaleDark,
  MaleDarkUnfocused,
  MaleLight,
  MaleLightUnfocused,
  FemaleDark,
  FemaleDarkUnfocused,
  FemaleLight,
  FemaleLightUnfocused,
} from '../../assets';
import AnimatedBox from './AnimatedBox';

const Gender: React.FC = () => {
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);

  const theme = useTheme();

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
    <S.ContainGenders>
      <S.ChooseGender activeOpacity={0.8} onPress={onChooseMale}>
        <AnimatedBox startAnimated={isMale} titleGender="Male" focused={isMale}>
          <S.WrapperIconGender>
            {theme.title === 'dark' ? (
              isMale ? (
                <MaleDark height={'100%'} width={'100%'} />
              ) : (
                <MaleDarkUnfocused height={'100%'} width={'100%'} />
              )
            ) : isMale ? (
              <MaleLight height={'100%'} width={'100%'} />
            ) : (
              <MaleLightUnfocused height={'100%'} width={'100%'} />
            )}
          </S.WrapperIconGender>
        </AnimatedBox>
      </S.ChooseGender>

      <S.ChooseGender activeOpacity={0.8} onPress={onChooseFemale}>
        <AnimatedBox
          startAnimated={isFemale}
          titleGender="Female"
          focused={isFemale}>
          <S.WrapperIconGender>
            {theme.title === 'dark' ? (
              isFemale ? (
                <FemaleDark height={'100%'} width={'100%'} />
              ) : (
                <FemaleDarkUnfocused height={'100%'} width={'100%'} />
              )
            ) : isFemale ? (
              <FemaleLight height={'100%'} width={'100%'} />
            ) : (
              <FemaleLightUnfocused height={'100%'} width={'100%'} />
            )}
          </S.WrapperIconGender>
        </AnimatedBox>
      </S.ChooseGender>
    </S.ContainGenders>
  );
};

export default Gender;
