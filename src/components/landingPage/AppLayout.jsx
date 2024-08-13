import React, {useState} from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AppLayout = ({ children }) => {
const [isOpen,setIsOpen] = useState(false)
const menu = () => {
    setIsOpen(!isOpen)
}
    return(
        <>
        <main className='flex flex-col gap-[10px] w-full h-fit overflow-y-auto items-cenetr justify-center'>
            <nav className="flex w-full desktop:px-[50px] shadow-xl h-fit py-[7px] items-center justify-between px-[10px]">
                <span className='w-fit h-fit desktop:gap-[30px] flex items-center justify-center'>
                    <i className='font-semibold text-3xl'>Payyed</i>
                <ul className='w-fit hidden transition-all desktop:flex p-[10px] font-medium z-[100] bg-white text-md gap-3 left-0'>
                                <li>SEND</li>
                                <li>RECIEVED</li>
                                <li>ABOUT US</li>
                                <li>FEES</li>
                            </ul>
                    <button onClick={menu} className='desktop:hidden text-3xl flex'><IoMenuOutline /></button>
                </span>
                <span className='flex text-xl font-semibold gap-[5px] items-center justify-center w-fit h-fit'>
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/register"><button className='bg-green-500 text-white py-[6px] p-[10px] rounded-md'>Sign Up</button></Link>
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
            <footer className='w-full h-fit desktop:flex-row desktop:justify-between desktop:px-[5%] desktop:py-[50px] text-md font-semibold text-center flex flex-col items-center justify-center pt-[20px] bg-slate-50'>
            <span className='desktop:flex desktop:gap-[7px] desktop:flex-col'><ul className='flex gap-6 w-fit'>
                    <li>About Us</li>
                    <li>Support</li>
                    <li>Help</li>
                    <li>Carrers</li>
                </ul>
                <hr />
                <span className='flex py-[15px] gap-8'>
                    <FaFacebookF />
                    <FaXTwitter />
                    <FaYoutube />
                </span></span>
                <span className='desktop:flex desktop:flex-col'>
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