import { React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';
import '../../index.css';

const Menu = () => {

    const [isOpen , setIsOpen] = useState(false);

    const onClickMenu = () => {
        setIsOpen(!isOpen)
    }

    const MenuCont = [
        {
            title: 'Home',
            link: '/home',
            icon: 'src/assets/images/HomeIcon.svg'
        },
        {
            title: 'Calendar',
            link: '/calendar',
            icon: 'src/assets/images/calendarIcon.svg'
        },
        {
            title: 'Events',
            link: '/events',
            icon: 'src/assets/images/checkbox.svg'
        },
        {
            title: 'Notifications',
            link: '/notifications',
            icon: 'src/assets/images/NotificationsIcon.svg'
        },
        {
            title: 'Profile',
            link: '/profile',
            icon: 'src/assets/images/profile.svg'
        },
        {
            title: 'LogOut',
            link: '/logout',
            icon: 'src/assets/images/exitIcon.svg'
        }
    ]
    
    return(
    <>
    <div className='absolute top-[2.75rem] right-12 z-20 '>
         {isOpen ? <FontAwesomeIcon className='text-black w-8 h-8' icon={faXmark} onClick={onClickMenu}/> : <FontAwesomeIcon className='text-black w-8 h-8' icon={faBars} onClick={onClickMenu}/>}
    </div>
    <motion.nav 
    initial={{ x:-400}}
    animate={ {x:isOpen ? 0 : -400}} 
    transition={{bounce:0}}
    id='Menu' 
    className={isOpen ? "z-10 absolute top-0 bg-[#1F5B6C] text-white w-[20rem] min-h-full flex flex-col items-center" : " absolute top-0  bg-[#1F5B6C] text-white w-[20rem] min-h-full flex flex-col items-center "}>
        
        <div className="grid content-center items-center mb-4">
            <motion.span 
            initial={{ y:-75, opacity:0 }}
            animate={{opacity:isOpen ? 1 : 0, y:isOpen ? 0 : -75}}
            transition={{delay:.25}}
            className="uppercase font-light text-4xl mt-6 -tracking-[-1rem]">Grove</motion.span>
            
            <div className='grid mt-8 bg-white w-[10rem] h-[10rem] rounded-full content-center justify-center'>
                <img src='src/assets/images/profileExample.jpg' className=' w-[9.5rem] h-[9.5rem] rounded-full' alt='Profile picture'/>
            </div>
        </div>
        <ul className="space-y-12 justify-center mt-12 ">
            {

             MenuCont.map((menuItems, index) => {
                return (
                    <motion.li 
                        initial={{opacity:0, x:-35}}
                        animate={{opacity:isOpen ? 1 : 0, x:isOpen ? 0 : -35}}
                        transition={{delay:.25}}
                        key={index} 
                        className="flex flex-row gap-2 text-xl text-white font-normal relative">
                        <NavLink to={menuItems.link} className="flex gap-2 ease-in-out hover:after:w-[30%] hover:after:h-[2px] hover:after:bg-white hover:after:absolute hover:after:bottom-[-4px] hover:after:left-[20px]">
                            <img className="h-6 w-6" src={menuItems.icon} alt="home icon"/>
                            {menuItems.title}
                        </NavLink>
                    </motion.li>
                );
            })

            }
        </ul>
        
    </motion.nav>
    </> 
    )
}

export default Menu;
