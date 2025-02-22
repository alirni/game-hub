'use client';

import { FC, useContext } from 'react';

import {
  GameSetupContext,
  GameSetupContextType,
} from '../../contexts/GameSetupContext';
import { SetupForm } from '../SetupForm';
import Game from '../Game/Game';

const GameContainer: FC = () => {
  const { showGame } = useContext(GameSetupContext) as GameSetupContextType;

  return showGame ? <Game /> : <SetupForm />;
};

export default GameContainer;
