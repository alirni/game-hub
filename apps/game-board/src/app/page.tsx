import { Card } from '@game-hub/ui';

export default function Index() {
  return (
    <main className='flex flex-col h-full'>
      {/* header */}
      <div className='m-4 text-center'>
        <h1 className='text-7xl'>GameHub</h1>
        <p className='text-2xl'>Welcome to the GameHub!</p>
      </div>

      {/* //container for the card */}
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3 overflow-auto p-4'>
        {Array.from({ length: 10 }).map((_, index) => (
          <Card
            key={index}
            title={`Card ${index + 1}`}
            description={`This is a card ${index + 1}`}
            imageUrl='/placeholder.png'
          />
        ))}
      </div>
    </main>
  );
}
