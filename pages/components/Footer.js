import React from 'react'
import Image from 'next/image'
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='bg-contrast flex flex-col justify-center items-center pb-12 px-8'>
      <div className='mb-5'>
        <Image src={'/logo-white.svg'} alt='white logo footer' width={30} height={30} />
      </div>
      <div className='text-white font-[500] mb-5'>
        Mistakes are proof that you are trying
      </div>
      <div className='flex justify-around items-center w-1/2 lg:w-1/5'>
        <Link href={"https://github.com/NirajVadher07"} className='p-[7px] border-2 border-white rounded-full text-white hover:text-[#24292e] hover:bg-white duration-300 ease-in-out transform'>
          <FaGithub className='text-2xl' />
        </Link>
        <Link href={"https://www.linkedin.com/in/nirajvadher0711/"} className='p-[7px] border-2 rounded-full hover:bg-[#0A66C2] hover:border-[#0A66C2] duration-300 ease-in-out transform'>
          <FaLinkedinIn className='text-2xl text-white' />
        </Link>
        <Link href={"mailto:nirajvvadher0711@gmail.com"} className='p-[7px] border-2 border-white rounded-full text-white hover:text-[#CE3C30] hover:bg-white duration-300 ease-in-out transform'>
          <IoIosMail className='text-2xl' />
        </Link>
      </div>
    </div>
  )
}
export default Footer
