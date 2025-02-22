'use client';

import { FC, useContext } from 'react';

import { Button } from '@game-hub/libs/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@game-hub/libs/ui/card';

import {
  GameSetupContext,
  GameSetupContextType,
} from '../../contexts/GameSetupContext';

const Game: FC = () => {
  const { config } = useContext(GameSetupContext) as GameSetupContextType;

  return (
    <Card className='w-96 mt-8'>
      <CardHeader>
        <CardTitle className='text-lg'>Setup</CardTitle>
      </CardHeader>

      <CardContent>{JSON.stringify(config)}</CardContent>
      <CardFooter className='flex'>
        <Button variant='approve' size='lg' className='w-full' type='submit'>
          Test
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Game;
