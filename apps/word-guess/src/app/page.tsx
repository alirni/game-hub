
import { Button } from '@game-hub/libs/ui/button';
import { 
  Card, 
  CardHeader,
  CardTitle,
  CardContent
} from '@game-hub/libs/ui/card';
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@game-hub/libs/ui/select';

export default function Index() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-6xl font-bold'>Word Guess</h1>
      <p className='text-2xl text-gray-500'>Guess the word</p>

      {/* setting of game */}
      <Card>
        <CardHeader>
          <CardTitle className='text-lg'>Setup</CardTitle>
        </CardHeader>
        <CardContent>
          <label className='text-xl'>Difficulty</label>
          <Select defaultValue='medium'>
            <SelectTrigger>
              <SelectValue placeholder='Select difficulty' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='easy'>Easy</SelectItem>
              <SelectItem value='medium'>Medium</SelectItem>
              <SelectItem value='hard'>Hard</SelectItem>
            </SelectContent>
          </Select>

          <label className='text-xl'>Category</label>
          <Select defaultValue='animals'>
            <SelectTrigger>
              <SelectValue placeholder='Select category' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='animals'>Animals</SelectItem>
              <SelectItem value='countries'>Countries</SelectItem>
              <SelectItem value='programming'>Programming</SelectItem>
            </SelectContent>
          </Select>

          <label className='text-xl'>Number of words</label>
          <Select defaultValue='5'>
            <SelectTrigger>
              <SelectValue placeholder='Select number of words' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='5'>5</SelectItem>
              <SelectItem value='10'>10</SelectItem>
              <SelectItem value='15'>15</SelectItem>
            </SelectContent>
          </Select>

          <label className='text-xl'>Time limit</label>
          <Select defaultValue='60'>
            <SelectTrigger>
              <SelectValue placeholder='Select time limit' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='30'>30 seconds</SelectItem>
              <SelectItem value='60'>1 minute</SelectItem>
              <SelectItem value='90'>1 minute 30 seconds</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
        <Button size='lg'>Start</Button>
      </Card>
    </main>
  );
}
