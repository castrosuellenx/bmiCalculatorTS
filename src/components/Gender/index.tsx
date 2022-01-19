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
import {RFValue} from 'react-native-responsive-fontsize';

const Gender: React.FC = () => {
  const [isMale, setIsMale] = useState(true);
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

  console.log(!isMale);

  return (
    <S.ContainGenders>
      <S.ChooseGender activeOpacity={0.8} onPress={onChooseMale}>
        <S.WrapperIconGender>
          {theme.title === 'dark' ? (
            isMale ? (
              <MaleDark height={RFValue(58)} width={RFValue(58)} />
            ) : (
              <MaleDarkUnfocused height={RFValue(58)} width={RFValue(58)} />
            )
          ) : isMale ? (
            <MaleLight height={RFValue(58)} width={RFValue(58)} />
          ) : (
            <MaleLightUnfocused height={RFValue(58)} width={RFValue(58)} />
          )}
        </S.WrapperIconGender>

        <S.Gender focused={isMale}>Male</S.Gender>
      </S.ChooseGender>

      <S.ChooseGender activeOpacity={0.8} onPress={onChooseFemale}>
        <S.WrapperIconGender>
          {theme.title === 'dark' ? (
            isFemale ? (
              <FemaleDark height={RFValue(58)} width={RFValue(58)} />
            ) : (
              <FemaleDarkUnfocused height={RFValue(58)} width={RFValue(58)} />
            )
          ) : isFemale ? (
            <FemaleLight height={RFValue(58)} width={RFValue(58)} />
          ) : (
            <FemaleLightUnfocused height={RFValue(58)} width={RFValue(58)} />
          )}
        </S.WrapperIconGender>

        <S.Gender focused={isFemale}>Female</S.Gender>
      </S.ChooseGender>
    </S.ContainGenders>
  );
};

export default Gender;
