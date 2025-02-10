import { MyUi, Card } from '@game-hub/ui';

export default function Index() {
  return (
    <main className='flex flex-col items-center justify-center h-screen m-4'>
      <h1 className='text-7xl'>GameHub</h1>
      <p className='text-2xl'>Welcome to the GameHub!</p>
      <MyUi />
      <Card
        title='test'
        description='test test test'
        imageUrl='/placeholder.png'
      />
    </main>
  );
}
