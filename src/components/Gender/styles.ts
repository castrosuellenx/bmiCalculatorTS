import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

type Props = {
  focused?: boolean;
};

export const ContainGenders = styled.View`
  flex-direction: row;
  width: 95%;
  height: ${RFValue(150)}px;
  justify-content: center;
  align-items: center;
  margin-vertical: ${RFValue(20)}px;
`;

export const ChooseGender = styled.TouchableOpacity`
  height: 95%;
  width: 45%;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.buttons};
  margin-horizontal: ${RFValue(3)}px;
  border-radius: ${RFValue(8)}px; ;
`;

export const Gender = styled.Text<Props>`
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fontFamily.bold};
  color: ${({theme, focused}) =>
    focused ? theme.colors.text : theme.colors.unfocused};
`;
