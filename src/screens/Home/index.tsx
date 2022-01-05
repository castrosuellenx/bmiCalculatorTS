import React from 'react';

import * as S from './styles';

export type Props = {
  //gender: string;
  gender: 'Male' | 'Female';
  height: number;
  weight: number;
  age: number;
};

const Home: React.FC<Props> = ({gender, height, weight, age}) => {
  return (
    <S.Container>
      <S.Title>Hello Word</S.Title>
      <S.Title>{gender}</S.Title>
      <S.Title>{height}cm</S.Title>
      <S.Title>{weight}kg</S.Title>
      <S.Title>{age} years</S.Title>
    </S.Container>
  );
};

export default Home;
