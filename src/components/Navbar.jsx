import React from 'react';
import logo from '../assets/logo1.png';
import { BsSun as Lightmode, BsSunFill as DarkMode } from "react-icons/bs";
import { AiOutlineRightCircle } from 'react-icons/ai'

function Navbar() {
    return (
        <nav className='bg-primary px-4 py-4' >
            <div className='flex justify-between  mx-auto'>
                <div className='flex gap-5 items-center' >
                    <img src={logo} alt={''} style={{ height: "50px" }} />
                    <p className='text-gray-400 font-semibold text-2xl'> Portfolio</p>
                </div>
                <ul className='flex gap-5 items-center px-3 text-lg'>
                    <li className=''>
                        <a href="#Resume" className='text-gray-400 bg-slate-800'> Resume</a>
                    </li>
                    <li>
                        <a href='#Projects' className='text-gray-400'> Projects</a>
                    </li>
                    <li>
                        <a href='#Blogs' className='text-gray-400'> Blogs</a>
                    </li>
                    <li className='border-solid border-2 rounded-full border-gray-400 flex p-2' >
                        <div><a href='#Contact' className='text-gray-400 p-5'> Contact </a> </div>

                        <div className='self-center'><AiOutlineRightCircle className='text-green-400 text-2xl' /> </div>

                    </li>
                    <li>
                        <Lightmode className=" cursor-pointer text-2xl text-gray-200"
                        />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar