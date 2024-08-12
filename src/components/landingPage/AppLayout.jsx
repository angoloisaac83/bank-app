import React, {useState} from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const AppLayout = ({ children }) => {
const [isOpen,setIsOpen] = useState(false)
const menu = () => {
    setIsOpen(!isOpen)
}
    return(
        <>
        <main className='flex flex-col gap-[10px] w-full h-fit overflow-y-auto items-cenetr justify-center'>
            <nav className="flex w-full shadow-xl h-fit py-[7px] items-center justify-between px-[10px]">
                <span className='w-fit h-fit flex text-3xl items-center justify-center'>
                    <i className='font-semibold'>Payyed</i>
                    <button onClick={menu}><IoMenuOutline /></button>
                </span>
                <span className='flex text-xl font-semibold gap-[5px] items-center justify-center w-fit h-fit'>
                    <button>Login</button>
                    <button className='bg-green-500 text-white p-[10px] rounded-md'>Sign Up</button>
                </span>
                {
                    isOpen ? (
                        <>
                            <ul className='w-full transition-all absolute top-[63px] p-[10px] shadow-xl font-medium z-[100] bg-white text-xl flex flex-col gap-3 left-0'>
                                <li>SEND</li>
                                <li>RECIEVED</li>
                                <li>ABOUT US</li>
                                <li>FEES</li>
                            </ul>
                        </>
                    ) : (
                        <></>
                    )
                }
            </nav>
            <div className='w-full h-fit flex items-center justify-center text-xl'>
                {children}
            </div>
            <footer className='w-full h-fit text-md font-semibold text-center flex flex-col items-center justify-center pt-[20px] bg-slate-50'>
                <ul className='flex gap-6 w-fit'>
                    <li>About Us</li>
                    <li>Support</li>
                    <li>Help</li>
                    <li>Carrers</li>
                </ul>
                <span className='flex py-[15px] gap-8'>
                    <FaFacebookF />
                    <FaXTwitter />
                    <FaYoutube />
                </span>
                <span>
                    <p className='text-md'>Copyright @ 2022 Payyed. All Rights Reserved.</p>
                    <ul className='py-[15px] text-md flex items-center justify-center gap-6'>
                        <li>Security</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </span>
            </footer>
        </main>
        </>
    )
}

export default AppLayout;