import { FC } from 'react';

interface GamePageProps {
  params: Promise<{ id: string }>;
}

const GamePage: FC<GamePageProps> = async ({ params }) => {
  const id = (await params).id;

  return <div>GamePage {id}</div>;
};

export default GamePage;
