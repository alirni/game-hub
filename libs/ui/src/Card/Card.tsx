import { FC } from 'react';
import { CardProps } from './Card.type';
import Image from 'next/image';

const Card: FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className='border border-gray-300 flex flex-col rounded-md shadow-md grayscale duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:grayscale-0'>
      <div className='relative h-48'>
        <Image
          className='rounded-t-md'
          src={imageUrl}
          alt='Image of a game'
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='p-4'>
        <h2 className='text-xl'>{title}</h2>
        <p className='text-sm text-gray-500'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
