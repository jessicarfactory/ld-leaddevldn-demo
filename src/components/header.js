import ld from '../ld-white-wide.png'
import React from 'react';


export default function Header(props) {
  return (
    <div className='grid  w-full bg-ldgray shadow-2xl place-items-center'>
    <div className="mx-auto xl:w-full p-4 lg:p-4 px-7 lg:px-28">
      <div>
      <img src={ld} className="mx-auto max-h-30" alt="logo" />
      <br></br>
      </div>
      <div className="text-base md:text-4xl pb-4 2xl:text-6xl">
        <p>Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-br from-ldyellow to-lddblue">GOTO AWS + EDA</span> London 2022</p>
      <div className="text-base md:text-3xl pb-4 2xl:text-6xl">
        <br></br>
        <p>Ship and <span className="text-transparent bg-clip-text bg-gradient-to-br from-ldyellow to-lddblue">release</span> features faster</p>
      </div>      
    </div>
    </div>
    </div>
  );
}
