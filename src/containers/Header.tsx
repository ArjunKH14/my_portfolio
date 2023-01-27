import React from 'react';
import {
    AiFillLinkedin,
    AiOutlineYoutube,
    AiOutlineGithub,
} from "react-icons/ai";

import { RxTwitterLogo } from "react-icons/rx";
import { useData } from '../App';

function Header() {

    const { themeToggle } = useData();
    const [lightTheme, ]: [boolean,any] = themeToggle;
    return (
        <section id="header">
            <div className=' flex flex-col items-center justify-center  p-3 h-80v top-0'>
                <h2 className='lg:text-7xl text-6xl  py-2  font-medium ' >
                    <span className='text-pink-400'>/</span>Arjun_K_H
                </h2>
                <h3 className='lg:text-3xl py-2 text-2xl '> Software Developer And Explorer</h3>
                <p className='lg:text-xl py-5 leading-8 text-base max-w-md'> I would tell you UDP joke, but you might not get it</p>
                <div className='lg:text-5xl text-4xl flex justify-center gap-16 py-3 text-gray-600'>
                    <RxTwitterLogo style={{ color: "#00acee" }} />
                    <AiFillLinkedin style={{ color: '#0072b1' }} />
                    <AiOutlineYoutube style={{ color: '#cc181e' }} />
                    <AiOutlineGithub style={{ color: lightTheme ?'black' : 'white' }} />
                </div>

            </div>
        </section>
    )
}

export default Header