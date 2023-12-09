import Image from 'next/image'
import React from 'react'

const Project = [
    {
        title: "Shaip API Documentation",
        description: "API documentation website for a Shaip with a user dashboard to track API usage. The website includes a demonstrative section illustrating how the API operates.",
        image: 'Shaip.svg'
    },
    {
        title: "Abhiyaan App",
        description: "The super-admin dashboard for the Abhiyaan app, encompassing all essential functionalities, enabling the SuperAdmin to manage News, Notices, New Cities, and New Villages effortlessly",
        image: 'Abhiyaan.svg',
    },
    {
        title: "HappyMeal",
        description: "Happy Meal is a website that provides the information about nearby tiffin services and with that you can get home like food far from home.",
        image: "HappyMeal.svg"
    },
    {
        title: "iNoteBook",
        description: "iNoteBook provides a seamlessly user experience with token-based authentication for secure sign-up and login. Users can efficiently perform CRUD operations on notes, enhancing productivity and data management.",
        image: "Inotebook.png"
    },
    {
        title: "Git Search Using Firebase",
        description: "Website seamlessly integrates Firebase authentication for user management, offering a streamlined experience to explore GitHub accounts via user IDs, displaying pertinent details and repositories.",
        image: "Githubsearch.png"
    }
]

const Projects = () => {

    return (
        <div id='project' className='flex flex-col justify-start items-center'>
            <div className='text-2xl font-[700] mb-5'>
                Recent Works
            </div>
            <div className='mb-5'>
                Here are a few projects I’ve worked on.
            </div>
            <div className='flex flex-col lg:flex-row flex-wrap justify-center items-center w-full mb-5'>
                {
                    Project.map((e, key) => {
                        return (
                            <div
                                key={key}
                                className='group bg-primary lg:mx-5 my-5 w-[90%] lg:w-1/3 text-primary min-h-[300px] flex justify-center items-center rounded-lg shadow-lg cursor-pointer relative'
                            >
                                <Image src={`/Projects/${e.image}`} width={300} height={300} alt='Project Image' />

                                {/* Text to show on hover */}
                                <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-500 ease-in-out bg-secondary rounded-lg shadow-lg px-2 py-4'>
                                    <h1 className='text-white text-2xl text-center font-[700] mb-5'>{e.title}</h1>
                                    <p className='text-white text-lg text-center'>{e.description}</p>
                                </div>
                            </div>


                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects
