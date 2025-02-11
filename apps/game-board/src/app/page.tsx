import { Card } from '@game-hub/ui';

export default function Index() {
  return (
    <main className='flex flex-col h-full'>
      <section className='grow m-2 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 relative flex flex-col items-center justify-center'>
        <header className='flex items-center justify-between py-12 px-12 w-full'>
          <div className='flex items-center'>
            <h1 className='text-3xl font-bold text-blue-950'>GameHub</h1>
          </div>
          <nav>
            <ul className='flex space-x-4'>
              <li>
                <a href='#games' className='hover:underline'>
                  Games
                </a>
              </li>
              <li>
                <a href='#about' className='hover:underline'>
                  About
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section id='games' className='grow flex flex-col items-center p-4'>
          <div className='text-center text-5xl font-bold text-blue-950 md:text-8xl mt-20 mb-7'>
            Welcome to GameHub!
            <br />
            🎮🚀
          </div>
          <div className='text-xl text-gray-800 p-4 text-justify w-3/5'>
            GameHub is a collection of exciting and interactive games built from
            scratch using JavaScript and TypeScript. Whether you enjoy puzzles,
            arcade challenges, or creative gameplay, you’ll find handcrafted
            experiences designed for fun and engagement. Each game showcases
            creativity, smooth performance, and clean code, making GameHub a
            place for both players and developers to explore and enjoy. Stay
            tuned for new additions as the collection grows!
          </div>
        </section>
        <div className='w-4/5 absolute -bottom-20 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-4'>
          {Array.from({ length: 4 }).map((_, index) => (
            <Card
              key={index}
              title={`Card ${index + 1}`}
              description={`This is a card ${index + 1}`}
              imageUrl='/placeholder.png'
            />
          ))}
        </div>
      </section>
      <footer id='about' className='flex items-center justify-center p-4'>
        <p className='text-center text-gray-500'>
          Welcome to the GameHub! This is a demo site for the GameHub project.
        </p>
      </footer>
    </main>
  );
}
