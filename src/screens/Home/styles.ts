import styled from 'styled-components/native';
import RFValue from '../../utils/RFValue';
//import RFValue from '@/utils/RFValue';

type Props = {
  focused?: boolean;
};

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
`;

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

export const Switch = styled.Switch<Props>``;

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
