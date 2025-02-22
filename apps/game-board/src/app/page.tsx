import { Card } from '@game-hub/components';
import Link from 'next/link';

export default function Index() {
  return (
    <section className='m-2 mt-0 rounded-b-3xl bg-gradient-to-r from-cyan-500 to-blue-500 relative flex flex-col h-3/5 items-center'>
      <div className='text-center text-5xl font-bold text-blue-950 md:text-8xl mt-20 mb-7'>
        Welcome to GameHub! 🕹️
      </div>
      <div className='text-xl text-gray-800 p-4 text-justify w-3/5 mx-auto'>
        GameHub is a collection of exciting and interactive games built from
        scratch using JavaScript and TypeScript. Whether you enjoy puzzles,
        arcade challenges, or creative gameplay, you’ll find handcrafted
        experiences designed for fun and engagement. Each game showcases
        creativity, smooth performance, and clean code, making GameHub a place
        for both players and developers to explore and enjoy. Stay tuned for new
        additions as the collection grows!
      </div>
      <div className='w-4/5 absolute -bottom-36 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-4'>
        <Link href={`/games/memory-match`}>
          <Card
            title={`Card memory-match`}
            description={`This is a card memory-match`}
            imageUrl='/placeholder.png'
          />
        </Link>
        {Array.from({ length: 3 }).map((_, index) => (
          <Link key={index} href={`/games/${index + 1}`}>
            <Card
              title={`Card ${index + 1}`}
              description={`This is a card ${index + 1}`}
              imageUrl='/placeholder.png'
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
