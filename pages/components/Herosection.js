import React from 'react'
import Image from 'next/image'
import { FaCode } from "react-icons/fa6";
import Timeline from './Timeline';
const Herosection = () => {
    return (
        <div>
            <div id='home' className='h-screen'>
                <div className='text-5xl font-[700] mt-20 text-center mb-5 px-4'>
                    Hey there, I’m Web Developer
                </div>
                <div className='text-2xl font-[400] text-center px-4'>
                    I design and code beautifully simple things, and I love what I do.
                </div>
                <div className='flex justify-center items-center px-4 relative mb-5'>
                    <Image src={'/profile.svg'} alt={"Profile"} width={500} height={500} />
                </div>
            </div>
            <div className='flex justify-center items-end px-4'>
                <Image src={'/herosection.svg'} alt='HeroSection' width={725} height={280} />
            </div>
            {/* Introduction */}
            <div id='about' className='flex flex-col items-center justify-center bg-contrast py-16 pt-24 px-8 text-white font-[400] text-md'>
                <div className='font-[700] text-2xl text-center mb-5'>
                    Hi, I’m Niraj. Nice to meet you.
                </div>
                <div className='text-center w-full lg:w-3/4 mb-5'>
                    I’m a fourth-year computer engineering student with a passion for web development, specializing in the MERN stack. During my academic journey, I’ve gained valuable experience through a successful internship where I actively contributed to a live project. I take pride in being a quick learner and a collaborative team member, always eager to embrace new challenges.
                </div>
                <div className='text-center w-3/4'>
                    My true passion lies in crafting visually appealing websites that not only attract users but also address their needs effectively. I believe in the power of design to enhance user experiences and solve problems. I’m committed to applying my skills and knowledge to create beautiful and functional websites that leave a lasting impression on users.
                </div>
            </div>
            {/* timeline */}
            <div className='bg-contrast'>
                <Timeline />
            </div>
            {/* Work */}
            <div className="flex justify-center items-center px-8 py-12" style={{ background: "linear-gradient(to bottom, #5F7FC4 0%, #5F7FC4 50%, #FFFFFF 50%, #FFFFFF 100%)" }}>

                <div className='z-5 rounded-lg shadow-lg bg-white w-full px-8 py-8 flex flex-col justify-center items-center'>
                    <div className='mb-3 text-3xl font-[700] flex justify-evenly items-center w-full lg:w-1/4'>
                        <div className='rounded-full p-[5px] bg-yellow text-center'>
                            <FaCode />
                        </div>
                        <div>
                            Web Developer
                        </div>
                    </div>
                    <div className='mb-3 text-center'>
                        I like to code things from scratch and enjoy bringing ideas to life in the browser.
                    </div>
                    <div className='mb-3 text-center'>
                        <h1 className='mb-2'>Languages I love</h1>
                        <div className='flex justify-center items-center w-full flex-wrap'>
                            {
                                ["HTML"
                                    , "CSS"
                                    , "JavaScript"
                                    , "Tailwind CSS"
                                    , "ReactJS"
                                    , "Bootstrap"
                                    , "NextJS"
                                    , "PHP"
                                    , "ExpressJS"
                                    , "CPP"
                                ].map((e, key) => {
                                    return (
                                        <div key={key} className='m-2 px-2 py-2 rounded-lg bg-secondary text-white'>
                                            {e}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='mb-3 text-center'>
                        <h1 className='mb-2'>
                            Database I worked on
                        </h1>
                        <div className='flex justify-center items-center w-full flex-wrap'>
                            {
                                [
                                    "MySQL",
                                    "MongoDB"
                                ].map((e, key) => {
                                    return (
                                        <div key={key} className='m-2 px-2 py-2 rounded-lg bg-secondary text-white'>
                                            {e}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Herosection
