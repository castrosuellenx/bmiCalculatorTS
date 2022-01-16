import React from 'react';
import SwitchTheme from '../../components/SwitchTheme';

import * as S from './styles';

export type Props = {
  toggleTheme(): void;
};

const Home: React.FC<Props> = ({toggleTheme}) => {
  return (
    <S.Header>
      <S.Title>BMI Calculator</S.Title>

      <SwitchTheme toggleTheme={toggleTheme} />
    </S.Header>
  );
};

export default Home;
