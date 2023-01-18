import React from 'react';
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiOutlineYoutube,
    AiOutlineGithub,
    AiFill
} from "react-icons/ai";

function Header() {
    return (
        <div className=''>
            <div className=' flex flex-col items-center justify-center  p-3 h-screen'>
                <h2 className='text-8xl py-2  font-medium' >
                    <span className='text-pink-400'>/</span>Arjun_K_H
                </h2>
                <h3 className='text-3xl py-2 md:text-3xl'> Software Developer And Explorer</h3>
                <p className='text-2xl py-5 leading-8 md:text-xl max-w-md'> I would tell you UDP joke, but you might not get it</p>
                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                <AiFillTwitterCircle style= {{color: "#00acee"}} />
                <AiFillLinkedin style= {{color: '#0072b1'}} />
                <AiOutlineYoutube style={{color:'red'}}/>
                <AiOutlineGithub style ={{color: 'white'}}/>
            </div>

            </div>


        </div>
    )
}

export default Header