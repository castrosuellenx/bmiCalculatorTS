import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: ${RFValue(90)}%;
  height: ${RFValue(68)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(22)}px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: ${RFValue(27)}px;
  font-family: ${({theme}) => theme.fontFamily.bold};
  color: #fefefe;
`;
