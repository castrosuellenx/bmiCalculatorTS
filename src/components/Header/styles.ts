import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

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
