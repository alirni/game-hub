export default function Index() {
  return (
    <main className='flex flex-col h-full'>
      <header className='flex items-center justify-between py-12 px-12'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold text-blue-500'>GameHub</h1>
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
      <section
        id='games'
        className='grow flex flex-col items-center p-4'
        style={{ border: '1px solid blue' }}
      >
        <div className='text-center text-5xl font-bold text-blue-500 md:text-8xl my-20'>
          Welcome to GameHub!
          <br />
          🎮🚀
        </div>
        <div
          className='text-2xl text-gray-500 p-4 w-4/6 text-justify'
          style={{ border: '1px solid red' }}
        >
          GameHub is a collection of exciting and interactive games built from
          scratch using JavaScript and TypeScript. Whether you enjoy puzzles,
          arcade challenges, or creative gameplay, you’ll find handcrafted
          experiences designed for fun and engagement. Each game showcases
          creativity, smooth performance, and clean code, making GameHub a place
          for both players and developers to explore and enjoy. Stay tuned for
          new additions as the collection grows!
        </div>
      </section>
      <footer id='about' className='flex items-center justify-center p-4'>
        <p className='text-center text-gray-500'>
          Welcome to the GameHub! This is a demo site for the GameHub project.
        </p>
      </footer>

      {/* <main className='flex flex-col h-full'>
        <div className='m-4 text-center'>
          <h1 className='text-7xl'>GameHub</h1>
          <p className='text-2xl'>Welcome to the GameHub!</p>
        </div>

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
      </main> */}
    </main>
  );
}
