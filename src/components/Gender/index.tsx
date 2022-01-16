import React, {useState} from 'react';

import * as S from './styles';

const Gender: React.FC = () => {
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
    <S.ContainGenders>
      <S.ChooseGender activeOpacity={0.8} onPress={onChooseMale}>
        <S.Gender focused={isMale}>Male</S.Gender>
      </S.ChooseGender>

      <S.ChooseGender activeOpacity={0.8} onPress={onChooseFemale}>
        <S.Gender focused={isFemale}>Female</S.Gender>
      </S.ChooseGender>
    </S.ContainGenders>
  );
};

export default Gender;
