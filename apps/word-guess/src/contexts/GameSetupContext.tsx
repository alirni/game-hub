import { createContext, FC, ReactNode, useState } from 'react';

interface GameConfig {
  difficulty: 'easy' |'medium' | 'hard';
  category: 'animals' | 'countries'| 'programming';
  numberOfWords: '5' | '10' | '15';
  timeLimit: '30' | '60' | '90';
};

export type GameSetupContextType = {
  config: GameConfig;
  changeConfig: (values: GameConfig) => void;
};

export const GameSetupContext = createContext<GameSetupContextType | null>(null);

const GameSetupProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [config, setConfig] = useState<GameConfig>({
  difficulty: 'medium',
  category: 'animals',
  numberOfWords: '5',
  timeLimit: '60',
});

  const changeConfig = (values: GameConfig) => {
    setConfig({...values});
  };
  
  return (
    <GameSetupContext.Provider value={{ config, changeConfig }}>
      {children}
    </GameSetupContext.Provider>
  );
};

export default GameSetupProvider;