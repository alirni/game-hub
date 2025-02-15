import { Card } from '@game-hub/ui';
import Link from 'next/link';

export default function Index() {
  return (
    <section className='grow flex flex-col items-center p-4'>
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
        {Array.from({ length: 4 }).map((_, index) => (
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
