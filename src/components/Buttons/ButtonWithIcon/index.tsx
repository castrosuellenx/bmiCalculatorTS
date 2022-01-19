import React from 'react';
import {TouchableOpacityProps, TextProps} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

export type Props = {
  icon: string;
  size: number;
  color: string;
  title: string;
  marginTop?: boolean;
  marginBottom?: boolean;
  bold?: boolean;
} & TouchableOpacityProps;

const ButtonWithIcon: React.FC<Props> = ({
  icon,
  size,
  color,
  title,
  marginTop = false,
  marginBottom = false,
  bold = false,
  ...rest
}) => {
  return (
    <S.Container marginTop={marginTop} marginBottom={marginBottom} {...rest}>
      <MaterialIcons name={icon} size={size} color={color} />
      <S.Title bold={bold} color={color}>
        {title}
      </S.Title>
    </S.Container>
  );
};

export default ButtonWithIcon;
