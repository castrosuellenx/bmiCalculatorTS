import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type TouchableOpacityProps = {
  marginTop?: boolean;
  marginBottom?: boolean;
};

type TextProps = {
  bold?: boolean;
  color: string;
};

export const Container = styled(TouchableOpacity)<TouchableOpacityProps>`
  flex-direction: row;
  margin-top: ${({marginTop}) => (marginTop ? RFValue(20) : RFValue(0))}px;
  margin-bottom: ${({marginBottom}) =>
    marginBottom ? RFValue(20) : RFValue(0)}px;
`;

export const Title = styled.Text<TextProps>`
  font-family: ${({bold, theme}) =>
    bold ? theme.fontFamily.bold : theme.fontFamily.regular}
  font-size: ${RFValue(17)}px;
  color: ${({color}) => color}
  text-align: center;
  margin-left: ${RFValue(7)}px;
`;
