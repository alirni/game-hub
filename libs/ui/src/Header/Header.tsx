import { FC, PropsWithChildren } from 'react';
import { HeaderProps } from './Header.type';

const Header: FC<PropsWithChildren<HeaderProps>> = ({ title, children }) => {
  return (
    <header className='flex items-center justify-between py-12 px-12 w-full'>
      <div className='flex items-center'>
        <h1 className='text-3xl font-bold text-blue-950'>{title}</h1>
      </div>
      {children}
    </header>
  );
};

export default Header;
