import { FC, PropsWithChildren } from 'react';
import { HeaderProps } from './Header.type';

const Header: FC<PropsWithChildren<HeaderProps>> = ({ title, children }) => {
  return (
    <header className='flex items-center justify-between py-12 px-12 m-2 rounded-t-3xl bg-gradient-to-r from-cyan-500 to-blue-500 mb-0'>
      <div className='flex items-center'>
        <h1 className='text-3xl font-bold text-blue-950'>{title}</h1>
      </div>
      {children}
    </header>
  );
};

export default Header;
