import React from 'react';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';

import * as S from './styles';

export type Props = {
  title: string;
  loading?: boolean;
} & TouchableOpacityProps;

const ButtonPrimary: React.FC<Props> = ({title, loading = false, ...rest}) => {
  return (
    <S.Container {...rest}>
      {loading ? (
        <ActivityIndicator size="large" color="#FEFEFE" />
      ) : (
        <S.Title>{title}</S.Title>
      )}
    </S.Container>
  );
};

export default ButtonPrimary;
