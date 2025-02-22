import { SetupContainer } from "../components";

export default function Index() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-6xl font-bold'>Word Guess</h1>
      <p className='text-2xl text-gray-500'>Guess the word</p>
      
      <SetupContainer />
    </main>
  );
}
