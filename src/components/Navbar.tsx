import React from 'react';
import { useState, useEffect } from 'react';
import logo from '../assets/logo1.png';
import ellipse from '../assets/Ellipse.svg'
import { BsFillSunFill as Lightmode, BsFillMoonStarsFill as DarkMode } from "react-icons/bs";
import { AiOutlineRightCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiX } from 'react-icons/hi';
import { useData } from '../App';
interface navMenu {

    "Resume": boolean,
    "Projects": boolean,
    "Blogs": boolean

}


function Navbar() {
    const [menu, setMenu] = useState<string[]>([]);
    const [activeNavButton, setActiveNavButton] = useState<navMenu>({
        "Resume": true,
        "Projects": false,
        "Blogs": false
    });
    const [toggle, setToggle] = useState<boolean>(false)

    const { themeToggle } = useData();

    const [lightTheme, setToggleTheme]: [boolean,any] = themeToggle

    useEffect(() => {
        const menuList: string[] = ["Resume", "Projects", "Blogs"]
        setMenu(menuList);

        const activeMenuList: navMenu = {
            "Resume": true,
            "Projects": false,
            "Blogs": false
        }
        menuList.map((item) => {
            activeMenuList[item] = false
        })

        setActiveNavButton(activeMenuList);
    }, [])


    function handleClickMenuBar(id) {

        console.log(id)
        console.log(activeNavButton)

        const activeMenuList: navMenu = {
            "Resume": false,
            "Projects": false,
            "Blogs": false
        }
        activeMenuList[id] = true;
        setActiveNavButton(activeMenuList)
    }

    function resetActiveNavBar() {
        const activeMenuList: navMenu = {
            "Resume": false,
            "Projects": false,
            "Blogs": false
        }
        setActiveNavButton(activeMenuList)
    }




    return (


        <section className=' sticky right-0 left-0 top-0 z-30 bg-portprimary'>
            <nav className='bg-portprimary dark:bg-lightprimary py-4 ' >
                <div className='flex justify-between flex-wrap'>

                    <div className='flex gap-5 items-center' id="#portfolio">
                        <img src={logo} alt={''} style={{ height: "50px" }} />
                        <p className='font-semibold text-2xl' > <a href='#header' className=''> Portfolio </a></p>
                    </div>
                    <ul className='flex gap-5 items-center px-3 text-lg ' >

                        {

                            menu.map((item) => (

                                <li className=' hidden md:block lg:visible sm:hidden' key={item}>

                                    <img src={ellipse} alt='mySvgImage' key={item} className={`h-5 w-6 top-4 absolute transition ease-in-out delay-90' ${activeNavButton[item] == true ? 'visible' : 'invisible'}`} />
                                    <a href={`#${item}`} className=' transition ease-in-out delay-90 hover:text-slate-200 hover:text-xl dark:hover:text-portprimary-300 ' onMouseOver={() => handleClickMenuBar(item)} onMouseLeave={resetActiveNavBar}> {item}  {activeNavButton[item]} </a>
                                </li>
                            ))
                        }
                        <li className=' hidden border-solid border-2 rounded-full border-gray-400 flex p-2 md:flex lg:visible' >
                            <div><a href='#Contact' className='p-5 '> Contact </a> </div>

                            <div className='self-center'><AiOutlineRightCircle className='text-green-400 text-2xl' /> </div>

                        </li>
                        <li>
                            { lightTheme ? ( <Lightmode className=" cursor-pointer text-2xl dark:text-portprimary" onClick={() =>setToggleTheme(false)}
                            />): ( <DarkMode className=" cursor-pointer text-2xl text-gray-200" onClick={() => setToggleTheme(true)}
                            />)}

                        </li>
                        <li>
                            <div className='rounded-full p-2  md:collapse lg:collapse'>
                                <RxHamburgerMenu className=" cursor-pointer text-3xl w-7 h-7" onClick={() => setToggle(true)} />

                                {
                                    toggle && (
                                        <motion.div
                                            whileInView={{ x: [300, 0] }}
                                            transition={{ duration: 1, ease: 'easeInOut' }}
                                            className='fixed top-0 bottom-0 right-0 z-5 p-5 w-40v h-100v flex flex-col justify-start align-top bg-gray-600 shadow-lg shadow-gray-900'
                                        >
                                            <HiX className=" cursor-pointer text-3xl text-portprimary mx-3 my-3 self-end" onClick={() => setToggle(false)} />
                                            <ul className='flex m-0 p-0 justify-start align-top flex-col h-max w-max'>
                                                {

                                                    ['Home', ...menu, 'Contact'].map((item) => (

                                                        <li className='h-10v w-max' key={item}>


                                                            <a href={`#${item}`} className='text-slate-300 uppercase transition-colors delay-30 hover:text-portprimary' onClick={() => setToggle(false)}> {item} </a>
                                                        </li>
                                                    ))

                                                }
                                            </ul>
                                        </motion.div>
                                    )
                                }

                            </div>
                        </li>
                    </ul>
                </div>

            </nav>
        </section >
    )
}

export default Navbar