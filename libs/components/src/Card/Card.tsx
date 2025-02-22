import React, { FC } from 'react';
import { CardProps } from './Card.type';
import Image from 'next/image';

const Card: FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className='min-h-72 bg-white flex flex-col rounded-3xl shadow-md grayscale duration-300 ease-in-out cursor-pointer hover:shadow-xl hover:grayscale-0'>
      <div className='relative grow'>
        <Image
          className='rounded-t-sm object-cover'
          src={imageUrl}
          alt='Image of a game'
          fill
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
