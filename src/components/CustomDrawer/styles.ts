import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.boxSecondary};
  justify-content: center;
`;

export const WrapperProfile = styled.View`
  background-color: ${({theme}) => theme.colors.boxPrimary};
  border-bottom-left-radius: ${RFValue(30)}px;
  border-bottom-right-radius: ${RFValue(30)}px;
  padding-vertical: ${RFValue(20)}px;
  margin-bottom: ${RFValue(15)}px;
`;

export const UserPicture = styled.Image`
  width: ${RFValue(116)}px;
  height: ${RFValue(116)}px;
  border-width: ${RFValue(4)}px;
  border-color: ${({theme}) => theme.colors.primary};
  border-radius: ${RFValue(60)}px;
  margin-bottom: ${RFValue(10)}px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.Text`
  font-family: ${({theme}) => theme.fontFamily.bold}
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.text}
  text-align: center;
`;

export const WrapperOptions = styled.View`
  flex: 3;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperSwitch = styled.View`
  width: ${RFValue(94)}%;
  align-items: center;
  padding-top: ${RFValue(25)}px;
`;

export const Divisor = styled.View`
  width: ${RFValue(75)}%;
  margin-top: ${RFValue(10)}px;
  border-top-width: ${RFValue(1)}px;
  border-color: ${({theme}) => theme.colors.border};
  align-self: center;
`;

export const WrapperButtons = styled.View`
  width: ${RFValue(94)}%;
  align-items: center;
`;
