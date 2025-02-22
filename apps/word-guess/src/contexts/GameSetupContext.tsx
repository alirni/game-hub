'use client';

import { createContext, FC, ReactNode, useState } from 'react';

interface GameConfig {
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'animals' | 'countries' | 'programming';
  numberOfWords: '5' | '10' | '15';
  timeLimit: '30' | '60' | '90';
}

export type GameSetupContextType = {
  config: GameConfig;
  changeConfig: (values: GameConfig) => void;
  showGame: boolean;
  startGame: () => void;
};

export const GameSetupContext = createContext<GameSetupContextType | null>(
  null
);

const GameSetupProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [showGame, setShowGame] = useState(false);

  const [config, setConfig] = useState<GameConfig>({
    difficulty: 'medium',
    category: 'animals',
    numberOfWords: '5',
    timeLimit: '60',
  });

  const changeConfig = (values: GameConfig) => {
    setConfig({ ...values });
  };

  const startGame = () => {
    setShowGame(true);
  };

  return (
    <GameSetupContext.Provider
      value={{ config, changeConfig, showGame, startGame }}
    >
      {children}
    </GameSetupContext.Provider>
  );
};

export default GameSetupProvider;
