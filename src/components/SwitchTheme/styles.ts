import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.regular}
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.text}
  text-align: center;
  margin-left: ${RFValue(5)}px;
  margin-right: ${RFValue(18)}px;
`;

export const Switch = styled.Switch``;
