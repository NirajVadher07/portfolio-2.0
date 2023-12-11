import React, { useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { toast } from 'react-toastify';
import axios from 'axios';
import { isValidEmail } from '../../constants/emailchecking';

const Form = ({ handleButtonClick }) => {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [sendingEmail, setSendingEmail] = useState(false)

    const handleChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    const SendEmail = async () => {
        const { name, email, message } = details;
        if (name === "" || email === "" || message === "") {
            toast.error("Please fill all fields");
        } else if (!isValidEmail(email)) {
            toast.error("Please enter a valid email");
        } else {
            try {
                setSendingEmail(!sendingEmail)
                const res = await axios.post("/api/sendmail", details);
                console.log(res)
                if (res.data.success) {
                    setDetails({
                        name: "",
                        email: "",
                        message: "",
                    })
                    handleButtonClick();
                    toast.success("Message received successfully");
                } else {
                    toast.error("unable to send message");

                }
                setSendingEmail(!sendingEmail)
            } catch (err) {
                console.log(err);
                toast.error("Error sending message");
            }
        }
    }

    return (
        <div className='bg-primary rounded-2xl px-8 py-8 text-primary mx-5 w-full lg:w-2/3 flex flex-col justify-start items-start'>
            <div className='text-3xl font-[700] flex justify-between items-center w-full mb-5'>
                <h1>
                    Start a conversation
                </h1>
                <span>
                    <MdOutlineCancel className='cursor-pointer' onClick={handleButtonClick} />
                </span>
            </div>
            {
                [
                    {
                        name: "Name",
                        type: "name",
                        placeholder: "Enter your name"
                    },
                    {
                        name: 'Email',
                        type: "email",
                        placeholder: "Enter your email"
                    }
                ].map((k, key) => {
                    return (
                        <div key={key} className='w-full mb-5'>
                            <div className='text-xl font-[600] mb-2'>
                                {k.name}
                            </div>
                            <input type={k.type} name={k.type} id={k.type} value={details[k.type]} onChange={(e) => handleChange(e)} className='p-2 rounded-lg w-full focus:outline-none' placeholder={k.placeholder} />
                        </div>
                    )
                })
            }
            <div className='w-full mb-5'>
                <div className='text-xl font-[600] mb-2'>
                    Message
                </div>
                <textarea value={details['message']} onChange={(e) => handleChange(e)} name='message' id='message' className='p-2 rounded-lg w-full focus:outline-none h-[150px] overflow-auto resize-none' placeholder="Your Message..."></textarea>
            </div>
            <div className='w-full flex justify-end items-center'>
                <div onClick={SendEmail} className='bg-alternative text-white font-[700] text-2xl px-4 py-2 rounded-lg cursor-pointer'>
                    {sendingEmail ? "Sending..." : "Send"}
                </div>
            </div>
        </div>
    )
}

export default Form
