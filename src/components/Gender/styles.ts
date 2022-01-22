import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

type Props = {
  focused?: boolean;
};

export const ContainGenders = styled.View`
  width: ${RFValue(90)}%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-vertical: ${RFValue(20)}px;
`;

export const ChooseGender = styled.TouchableOpacity`
  height: ${RFValue(142.5)}px;
  width: ${RFValue(51)}%;
  justify-content: center;
  align-items: center;
  margin-horizontal: ${RFValue(3)}px;
`;

export const WrapperIconGender = styled.View`
  height: ${RFValue(54.98)}%;
  width: ${RFValue(50.95)}%;
  margin-bottom: ${RFValue(8)}px;
  justify-content: center;
  align-items: center;
`;

export const textGender = styled.Text<Props>`
  font-size: ${RFValue(21)}px;
  font-family: ${({theme}) => theme.fontFamily.bold};
  color: ${({focused, theme}) =>
    focused ? theme.colors.text : theme.colors.unfocused};
`;
