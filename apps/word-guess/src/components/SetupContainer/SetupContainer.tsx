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
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@game-hub/libs/ui/select';

import { useFormik } from 'formik';
import {
  GameSetupContext,
  GameSetupContextType,
} from '../../contexts/GameSetupContext';

const SetupContainer: FC = () => {
  const { config, changeConfig } = useContext(
    GameSetupContext
  ) as GameSetupContextType;

  const formik = useFormik({
    initialValues: config,
    onSubmit: (values) => {
      changeConfig(values);
    },
  });

  const onCustomChange = (name: string) => (value: unknown) => {
    formik.handleChange({
      target: {
        name,
        value,
      },
    });
  };

  return (
    <Card className='w-96 mt-8'>
      <form onSubmit={formik.handleSubmit}>
        <CardHeader>
          <CardTitle className='text-lg'>Setup</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='mb-4'>
            <label className='text-lg mb-2 flex'>Difficulty</label>
            <Select
              name='difficulty'
              value={formik.values.difficulty}
              onValueChange={onCustomChange('difficulty')}
            >
              <SelectTrigger>
                <SelectValue placeholder='Select difficulty' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='easy'>Easy</SelectItem>
                <SelectItem value='medium'>Medium</SelectItem>
                <SelectItem value='hard'>Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='mb-4'>
            <label className='text-lg mb-2 flex'>Category</label>
            <Select
              name='category'
              value={formik.values.category}
              onValueChange={onCustomChange('category')}
            >
              <SelectTrigger>
                <SelectValue placeholder='Select category' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='animals'>Animals</SelectItem>
                <SelectItem value='countries'>Countries</SelectItem>
                <SelectItem value='programming'>Programming</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='mb-4'>
            <label className='text-lg mb-2 flex'>Number of words</label>
            <Select
              name='numberOfWords'
              value={formik.values.numberOfWords}
              onValueChange={onCustomChange('numberOfWords')}
            >
              <SelectTrigger>
                <SelectValue placeholder='Select number of words' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='5'>5</SelectItem>
                <SelectItem value='10'>10</SelectItem>
                <SelectItem value='15'>15</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='mb-4'>
            <label className='text-lg mb-2 flex'>Time limit</label>
            <Select
              name='timeLimit'
              value={formik.values.timeLimit}
              onValueChange={onCustomChange('timeLimit')}
            >
              <SelectTrigger>
                <SelectValue placeholder='Select time limit' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='30'>30 seconds</SelectItem>
                <SelectItem value='60'>1 minute</SelectItem>
                <SelectItem value='90'>1 minute 30 seconds</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>

        <CardFooter className='flex'>
          <Button size='lg' className='w-full' type='submit'>
            Start
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SetupContainer;
