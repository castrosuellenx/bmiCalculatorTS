import React, {useState} from 'react';
import {useTheme} from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';

import * as S from './styles';
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
        <AnimatedBox startAnimated={isMale} focused={isMale}>
          <S.WrapperIconGender>
            <Ionicons
              name="male"
              size={RFValue(70)}
              color={isMale ? theme.colors.text : theme.colors.unfocused}
            />
          </S.WrapperIconGender>
          <S.textGender focused={isMale}>Male</S.textGender>
        </AnimatedBox>
      </S.ChooseGender>

      <S.ChooseGender activeOpacity={0.8} onPress={onChooseFemale}>
        <AnimatedBox startAnimated={isFemale} focused={isFemale}>
          <S.WrapperIconGender>
            <Ionicons
              name="female"
              size={RFValue(70)}
              color={isFemale ? theme.colors.text : theme.colors.unfocused}
            />
          </S.WrapperIconGender>
          <S.textGender focused={isFemale}>Female</S.textGender>
        </AnimatedBox>
      </S.ChooseGender>
    </S.ContainGenders>
  );
};

export default Gender;
