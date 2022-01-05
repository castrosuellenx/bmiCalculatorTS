// Descobrir porque está dizendo que tem erro na linha abaixo
import styled from 'styled-components';
//import styled from 'styled-components/native';
import RFValue from '../../utils/RFValue';
//import RFValue from '@/utils/RFValue';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(50)}px;
  color: #000000;
  padding-vertical: ${RFValue(10)}px;
`;
