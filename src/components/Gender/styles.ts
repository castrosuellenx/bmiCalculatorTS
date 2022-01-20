import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const ContainGenders = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-vertical: ${RFValue(20)}px;
`;

export const ChooseGender = styled.TouchableOpacity`
  height: ${RFValue(142.5)}px;
  width: ${RFValue(157)}px;
  justify-content: center;
  align-items: center;
  margin-horizontal: ${RFValue(3)}px;
`;

export const WrapperIconGender = styled.View`
  height: ${RFValue(40.7)}%;
  width: ${RFValue(36.94)}%;
  margin-bottom: ${RFValue(10)}px;
`;
