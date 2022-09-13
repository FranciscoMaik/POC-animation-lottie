import React from 'react';

import { ButtonAnimation } from '../components/ButtonAnimation';

import CardAnimation from '../animations/cards.json';
import LockedAnimation from '../animations/locked.json';

const Home: React.FC = function () {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <ButtonAnimation iconAnimation={CardAnimation} textButton="Cartões" />
      <ButtonAnimation iconAnimation={LockedAnimation} textButton="Bloqueado" />
    </div>
  );
};

export default Home;
