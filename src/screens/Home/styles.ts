import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
`;

export const StatusBar = styled.StatusBar``;

export const Header = styled.View`
  flex-direction: row;
  width: 95%;
  justify-content: space-around;
  background-color: ${({theme}) => theme.colors.boxSecondary};
  border-radius: ${RFValue(27)}px;
  margin-vertical: ${RFValue(5)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${({theme}) => theme.fontFamily.bold}
  color: ${({theme}) => theme.colors.text};
  padding-vertical: ${RFValue(30)}px;
`;

export const Switch = styled.Switch``;

/* export const BoxPrimary = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.boxPrimary};
`; */

export const BoxSecondary = styled.View`
  width: 95%;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.boxSecondary};
  border-radius: ${RFValue(27)}px;
  margin-vertical: ${RFValue(5)}px;
`;
