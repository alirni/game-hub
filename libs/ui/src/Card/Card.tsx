import { FC } from 'react';
import { CardProps } from './Card.type';
import Image from 'next/image';

const Card: FC<CardProps> = ({ title, description, imageUrl, rate }) => {
  return (
    <div className='border border-gray-300 flex flex-col rounded-md shadow-md grayscale duration-300 ease-in-out hover:shadow-lg hover:grayscale-0'>
      <Image
        className='rounded-t-md'
        src={imageUrl}
        alt='Image of a game'
        width={300}
        height={400}
      />
      <div className='p-4'>
        <h2>{title}</h2>
        <p>{description}</p>
        {rate && <span>{rate}</span>}
      </div>
    </div>
  );
};

export default Card;
