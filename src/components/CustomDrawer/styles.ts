import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.boxSecondary};
  justify-content: center;
`;

export const StatusBar = styled.StatusBar``;

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

export const WrapperSwitch = styled.View``;
