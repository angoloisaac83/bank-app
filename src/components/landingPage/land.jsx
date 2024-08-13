import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaPlay } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheckSquare } from "react-icons/fa";
import { FaRegEyeSlash, FaShareFromSquare } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { FaHandPointer } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import bg1 from '../../assets/image-2.jpg';
import bg2 from '../../assets/image-3.jpg';
import affiliate from '../../assets/anyone-affiliate-marketing.jpg';
import sellers from '../../assets/anyone-freelancer.jpg';
import shopping from '../../assets/anyone-online-sellers.jpg';
import freelancer from '../../assets/anyone-online-shopping.jpg';

function Land() {

    return (
        <>
            <main>
                <header>
                    <Carousel
                        showIndicators={true}
                        showStatus={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        dynamicHeight={false}
                        interval={4000}
                        className='h-[80vh] mt-[-10px]'>
                        <div className='flex items-center h-full justify-center'>
                            <img className='h-[95vh] object-cover' src={bg1} />
                            <span className='flex h-full w-full bg-[rgba(0,0,0,0.24)] absolute flex-col items-center justify-center text-white text-center desktop:gap-7 gap-3'>
                                <h1 className='text-[50px] leading-[50px] font-semibold'>Send And Recieve Money</h1>
                                <p className='text-2xl font-semibold text-center'>Quickly and easily send, receive and request money online with Payyed.</p>
                                <span className='flex flex-col desktop:flex-row gap-2'>
                                    <button className='border-white border-[1px] p-[7px] rounded-md'>Open a free Account</button>
                                    <button className='bg-green-500 text-white p-[7px] text-center flex items-center justify-center gap-2 rounded-md'><FaPlay /> See How it Works</button>
                                </span>
                            </span>
                        </div>
                        <div className='flex items-center h-full justify-center'>
                            <img className='h-[95vh] object-cover' src={bg2} />
                            <span className='flex h-full w-full bg-[rgba(0,0,0,0.24)] absolute flex-col items-center justify-center text-white text-center desktop:gap-7 gap-3'>
                                <h1 className='text-[50px] leading-[50px] font-semibold'>Lorem Lorem Lorem</h1>
                                <p className='text-2xl font-semibold text-center'>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                                <span className='flex flex-col desktop:flex-row gap-2'>
                                    <button className='border-white border-[1px] p-[7px] rounded-md'>Open a free Account</button>
                                    <button className='bg-green-500 text-white p-[7px] text-center flex items-center justify-center gap-2 rounded-md'><FaPlay /> See How it Works</button>
                                </span>
                            </span>
                        </div>
                    </Carousel>
                </header>
                <section className='mt-[40%] desktop:mt-[10%] text-center flex w-full flex-col items-center justify-center py-[20px]'>
                    <h1 className='text-3xl font-semibold'>Why should you choose Payyed?</h1>
                    <p>Here's Top 4 reasons why using a Payyed account for mangae your money</p>
                    <span className="w-full flex flex-wrap px-[5%] justify-between desktop:pt-[30px]"><div className="pt-[40px] desktop:w-[22%] text-start flex flex-col items-start justify-center w-full h-fit px-[17px]">
                        <FaHandPointer className='pb-[10px] text-green-500 text-[50px]' />
                        <span className='flex flex-col gap-[10px] pt-[10px]'>
                            <h1 className='text-2xl font-semibold'>Easy to use</h1>
                            <p className="desktop:text-sm">Lorems tore periam dolorem nihil alias ab. Esse voluptatum, vero ipsam possimus laborum ipsa reiciendis ea?</p>
                        </span>
                        <p className="flex gap-[5px] text-green-500 font-semibold items-center justify-center w-fit text-center h-fit pt-[10px]">Learn more <IoIosArrowForward /></p>
                    </div>
                        <div className="pt-[40px] desktop:w-[22%] text-start flex flex-col items-start justify-center w-full h-fit px-[17px]">
                            <FaShare className='pb-[10px] text-green-500 text-[50px]' />
                            <span className='flex flex-col gap-[10px] pt-[10px]'>
                                <h1 className='text-2xl font-semibold'>Faster Payments</h1>
                                <p className="desktop:text-sm">Lorems tore periam dolorem nihil alias ab. Esse voluptatum, vero ipsam possimus laborum ipsa reiciendis ea?</p>
                            </span>
                            <p className="flex gap-[5px] text-green-500 font-semibold items-center justify-center w-fit text-center h-fit pt-[10px]">Learn more <IoIosArrowForward /></p>
                        </div>
                        <div className="pt-[40px] desktop:w-[22%] text-start flex flex-col items-start justify-center w-full h-fit px-[17px]">
                            <BsCurrencyDollar className='pb-[10px] text-green-500 text-[50px]' />
                            <span className='flex flex-col gap-[10px] pt-[10px]'>
                                <h1 className='text-2xl font-semibold'>100% secure</h1>
                                <p className="desktop:text-sm">Lorems tore periam dolorem nihil alias ab. Esse voluptatum, vero ipsam possimus laborum ipsa reiciendis ea?</p>
                            </span>
                            <p className="flex gap-[5px] text-green-500 font-semibold items-center justify-center w-fit text-center h-fit pt-[10px]">Learn more <IoIosArrowForward /></p>
                        </div>
                        <div className="pt-[40px] desktop:w-[22%] text-start flex flex-col items-start justify-center w-full h-fit px-[17px]">
                            <FaLock className='pb-[10px] text-green-500 text-[50px]' />
                            <span className='flex flex-col gap-[10px] pt-[10px]'>
                                <h1 className='text-2xl font-semibold'>Easy to use</h1>
                                <p className="desktop:text-sm">Lorems tore periam dolorem nihil alias ab. Esse voluptatum, vero ipsam possimus laborum ipsa reiciendis ea?</p>
                            </span>
                            <p className="flex gap-[5px] text-green-500 font-semibold items-center justify-center w-fit text-center h-fit pt-[10px]">Learn more <IoIosArrowForward /></p>
                        </div></span>
                </section>
                <section className="flex px-[15px] desktop:flex-row desktop:items-center desktop:justify-center desktop:gap-[30px] flex-col h-fit w-full gap-[10px] py-[30px] bg-slate-100 text-xl">
                    <span className="desktop:w-[50%] desktop:flex desktop:flex-col desktop:gap-[15px]"><h1 className='text-3xl font-semibold'>Payment Solution for everyone</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit dolor cum eum ratione id expedita minus est delectus maxime sapiente placeat enim, veritatis commodi aspernatur distinctio ipsum suscipit. Totam.</p>
                        <p className="flex gap-[5px] text-green-500 font-semibold items-center justify-center w-fit text-center h-fit pt-[10px]">Find more solution <IoIosArrowForward /></p>
                    </span><section className='desktop:flex desktop:flex-wrap desktop:gap-[5px] desktop:w-[50%]'><div className='w-full desktop:w-[42%] h-fit pt-[15px] flex items-end justify-end'>
                        <img className='w-full h-[240px]' src={freelancer} alt="" />
                        <span className='absolute m-auto desktop:left-[51%] desktop:w-[20%] left-[13px] w-[93%] flex items-center justify-center bg-[rgba(0,0,0,0.34)] text-white text-2xl py-[8px] text-center'><p>Freelancer</p></span>
                    </div>
                        <div className='w-full desktop:w-[42%] h-fit pt-[15px] flex items-end justify-end'>
                            <img className='w-full h-[240px]' src={shopping} alt="" />
                            <span className='absolute m-auto desktop:left-[71.5%] desktop:w-[20%] left-[13px] w-[93%] flex items-center justify-center bg-[rgba(0,0,0,0.34)] text-white text-2xl py-[8px] text-center'><p>Online Shopping</p></span>
                        </div>
                        <div className='w-full desktop:w-[42%] h-fit pt-[15px] flex items-end justify-end'>
                            <img className='w-full h-[240px]' src={sellers} alt="" />
                            <span className='absolute m-auto desktop:left-[51%] desktop:w-[20%] left-[13px] w-[93%] flex items-center justify-center bg-[rgba(0,0,0,0.34)] text-white text-2xl py-[8px] text-center'><p>Online Sellers</p></span>
                        </div>
                        <div className='w-full desktop:w-[42%] h-fit pt-[15px] flex items-end justify-end'>
                            <img className='w-full h-[240px]' src={affiliate} alt="" />
                            <span className='absolute m-auto desktop:left-[71.5%] desktop:w-[20%] left-[13px] w-[93%] flex items-center justify-center bg-[rgba(0,0,0,0.34)] text-white text-2xl py-[8px] text-center'><p>Affiliate Marketing</p></span>
                        </div></section>
                </section>
                <div className='w-full flex flex-col text-center items-center justify-center desktop:py-[60px] py-[30px] gap-[10px]'>
                    <h1 className='text-3xl font-semibold pb-[5px]'>What can you do with Payyed?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit, officia veniam suscipit alias </p>
                </div>
                <section className="flex desktop:flex-row desktop:px-[70px] px-[15px] flex-col desktop:items-center desktop:justify-center h-fit w-full gap-[10px] py-[50px] bg-slate-100 text-xl">
                    <div className='w-full desktop:w-[22%] desktop:hover:scale-[1.2] transition-all desktop:bg-white rounded-md desktop:h-[200px] desktop:text-md h-[230px] shadow-xl border-[1px] pt-[15px] flex items-center justify-between flex-col'>
                        <FaShareFromSquare className="text-[75px] desktop:text-[60px] text-green-500 font-semibold" /><span className='left-[13px] w-[100%] flex items-center justify-center bg-[rgba(0,0,0,0.14)] text-black text-2xl py-[8px] text-center'><p>Send Money</p></span>
                    </div>
                    <div className='w-full desktop:w-[22%] desktop:hover:scale-[1.2] transition-all desktop:bg-white rounded-md desktop:h-[200px] desktop:text-md h-[230px] shadow-xl border-[1px] pt-[15px] flex items-center justify-between flex-col'>
                        <FaCheckSquare className="text-[75px] desktop:text-[60px] text-green-500 font-semibold" /><span className='left-[13px] w-[100%] flex items-center justify-center bg-[rgba(0,0,0,0.14)] text-black text-2xl py-[8px] text-center'><p>Recieve Money</p></span>
                    </div>
                    <div className='w-full desktop:w-[22%] desktop:hover:scale-[1.2] transition-all desktop:bg-white rounded-md desktop:h-[200px] desktop:text-md h-[230px] shadow-xl border-[1px] pt-[15px] flex items-center justify-between flex-col'>
                        <BsPeopleFill className="text-[75px] desktop:text-[60px] text-green-500 font-semibold" /><span className='left-[13px] w-[100%] flex items-center justify-center bg-[rgba(0,0,0,0.14)] text-black text-2xl py-[8px] text-center'><p>Pay a Freind</p></span>
                    </div>
                    <div className='w-full desktop:w-[22%] desktop:hover:scale-[1.2] transition-all desktop:bg-white rounded-md desktop:h-[200px] desktop:text-md h-[230px] shadow-xl border-[1px] pt-[15px] flex items-center justify-between flex-col'>
                        <FaShoppingBag className="text-[75px] desktop:text-[60px] text-green-500 font-semibold" /><span className='left-[13px] w-[100%] flex items-center justify-center bg-[rgba(0,0,0,0.14)] text-black text-2xl py-[8px] text-center'><p>Online Shopping</p></span>
                    </div>
                </section>
                <div className="py-[35px] desktop:border-b-[1px] px-[15px] desktop:w-full desktop:items-center desktop:justify-center desktop:text-center desktop:py-[60px] flex flex-col w-full h-fit text-xl">
                    <span className="flex desktop:w-[63%] desktop:items-center desktop:justify-center flex-col gap-[20px]">
                        <h1 className="text-4xl font-semibold">How does it work?</h1>
                        <p className='leading-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, non, quia dicta ipsum ea optio molestias temporibus maiores cupiditate, pariatur repellat aliquid amet veritatis quam sapiente beatae dolor. Recusandae, perspiciatis.</p>
                        <ul className='flex py-[10px] flex-col gap-[15px]'>
                            <li className="flex items-center justif-center gap-[10px] w-fit h-fit"><FaCheck />Sign Up Account</li>
                            <li className="flex items-center justif-center gap-[10px] w-fit h-fit"><FaCheck />Recieve and Send payments from worldwide</li>
                            <li className="flex items-center justif-center gap-[10px] w-fit h-fit"><FaCheck />Your funds will be transfered to your local bank account</li>
                        </ul>
                        <button className="border-[1px] border-green-500 rounded-md text-green-500 py-2 text-xl w-fit px-4">Open a Free Account</button>
                    </span>
                </div>
                <div className='w-full h-fit py-[30px] desktop:py-[60px] desktop:px-[30%] desktop:text-white desktop:bg-[rgba(0,0,0,0.44)] px-[30px] flex flex-col items-center justify-center text-center gap-[20px]'>
                    <h1 className='text-3xl font-semibold pb-[5px]'>Awsome Customer Support</h1>
                    <p>Have you any questions? Don't worry, We have great people ready to help you whenever you need it.</p>
                    <button className='py-[10px] text-white bg-green-500 w-fit px-4 rounded-sm'>Find out more</button>
                </div>
            </main>
        </>
    )
}
export default Land;