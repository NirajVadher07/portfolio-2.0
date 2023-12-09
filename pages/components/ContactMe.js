import React, { useState } from 'react'
import Backdrop from './BackDrop';

import Form from './Form';
const ContactMe = () => {
    const [isBackdropVisible, setBackdropVisible] = useState(false);

    const handleButtonClick = () => {
        setBackdropVisible(!isBackdropVisible);
    };
    return (
        <div id='contact'>
            <div className="flex justify-center items-center px-8 py-12" style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 50%, #5F7FC4 50%, #5F7FC4 100%, #5F7FC4 100%)" }}>
                <div className='z-5 rounded-lg shadow-lg bg-yellow w-full px-8 py-8 flex flex-col justify-center items-center'>
                    <div className='mb-3 text-3xl font-[700] flex justify-evenly items-center text-center'>
                        Interested in collaborating with me?
                    </div>
                    <div className='mb-3 text-center'>
                        I’m always open to discussing product design work or partnership opportunities.
                    </div>
                    <button className='flex justify-center rounded-full border-[1.5px] border-primary px-20 py-4 hover:bg-primary hover:border-alternative duration-300 ease-in-out transform' onClick={handleButtonClick}>
                        Start a conversation
                    </button>
                </div>
            </div>
            {/* Conditionally render the backdrop */}
            {isBackdropVisible && (
                <Backdrop>
                    <Form handleButtonClick={handleButtonClick}/>
                </Backdrop>
            )}
        </div>
    )
}

export default ContactMe