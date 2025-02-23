'use client';

import { FC, useContext, useEffect, useState } from 'react';

import { Button } from '@game-hub/libs/ui/button';
import { Card, CardContent } from '@game-hub/libs/ui/card';

import {
  GameSetupContext,
  GameSetupContextType,
} from '../../contexts/GameSetupContext';

// Utility function to format time as MM:SS
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const Game: FC = () => {
  const { config } = useContext(GameSetupContext) as GameSetupContextType;
  const [time, setTime] = useState<number>(0);
  const [words, setWords] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState<string>('');

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [time]);

  return (
    <Card className='w-96 mt-8'>
      <CardContent>
        <div className='mt-4 flex flex-col items-center justify-center border border-gray-300 rounded-md p-2'>
          <div className='text-4xl font-bold'>{formatTime(time)}</div>

          {/* TODO: make tooltip to show setup */}
          <div className='flex justify-center text-xs'>
            <div className=''>Category:</div>
            <div className='ml-2 capitalize'>{config.category}</div>
          </div>
        </div>

        {/* main part */}
        <div className='mt-4'>
          <div className='mt-4'>
            <input
              type='text'
              placeholder='Enter your guess'
              className='w-full p-2 border border-gray-300 rounded-md mb-2'
              value={currentWord}
              onChange={(e) => setCurrentWord(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setWords((prevWords) => [...prevWords, currentWord]);
                  setCurrentWord('');
                }
              }}
            />
            <Button
              variant='approve'
              size='lg'
              className='w-full'
              onClick={() => {
                setWords((prevWords) => [...prevWords, currentWord]);
                setCurrentWord('');
              }}
            >
              Test
            </Button>
          </div>

          <div className='mt-4 flex flex-col justify-center'>
            {words.map((word, index) => (
              <div className='flex justify-center mb-3' key={index}>
                {word.split('').map((char, index) => (
                  <div className='border rounded mr-2 px-6 py-4' key={index}>
                    {char}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Game;
