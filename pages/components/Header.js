import React, { useState, useEffect, useRef } from 'react';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import { Link } from 'react-scroll';
import {LINKS} from "../../constants/linksConstant"

const Header = () => {

    const [open, setOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => {
        setOpen(!open);
    };

    const closeMenuOnOutsideClick = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', closeMenuOnOutsideClick);

        return () => {
            window.removeEventListener('click', closeMenuOnOutsideClick);
        };
    }, []);

    return (
        <div
            ref={navRef}
            className='w-full bg-primary px-8 py-4 flex flex-col lg:flex-row lg:justify-between lg:items-center z-5 shadow-lg'
        >
            <div className='flex items-center justify-between'>
                <Image src={'/logo.svg'} alt='logo header' width={40} height={40} />
                <FiMenu
                    className='text-3xl text-primary cursor-pointer block lg:hidden'
                    onClick={toggleMenu}
                />
            </div>

            {/* Menu Icon */}
            <div className='lg:w-1/3 flex flex-row justify-start lg:justify-end items-center lg:items-center my-2'>
                <div className={`lg:flex flex-col lg:flex-row ${open ? 'flex' : 'hidden'}`}>
                    {LINKS.map((link, key) => (
                        <Link
                            key={key}
                            activeClass='active'
                            to={link.link}
                            spy={true}
                            smooth={true}
                            offset={-70} // Adjust offset as needed
                            duration={1200}
                            onClick={toggleMenu}
                            className='lg:mx-5 my-2 lg:my-0 font-bold cursor-pointer'
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
