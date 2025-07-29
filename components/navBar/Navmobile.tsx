import Link from 'next/link';
import React from 'react'
import { useState } from 'react'
import Search from '../../assets/svg/search';

const Navmobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isShow, setIsShow] = useState(false);
    return (

        <div className='flex items-center flex-col  text-white md:hidden'>
            <div className='bg-[#1F2B6C] flex  gap-x- justify-between items-center w-screen px-4 '>
                <button onClick={() => setIsOpen(!isOpen)} className=" text-[50px]  ">☰</button>
                <div className='flex space-x-5 items-center'>
                    <div className=' '>
                        <button onClick={() => setIsShow(!isShow)}>
                            <Search />
                        </button>

                    </div>
                    <button className="px-10 py-2 bg-[#BFD2F8] rounded-full cursor-pointer text-black">Appointnemt</button>
                </div>
            </div>
            <div className='flex gap-y-10 justify-start'>
                {isOpen && (
                    <div className="md:hidden px-4 pb-4 bg-[#1F2B6C] gap-y-10 w-screen absolute left-0 z-50">
                        <ul className="space-y-5  ">
                            <li><Link href="/">Home</Link></li>
                            <hr />
                            <li><Link href="/">About us</Link></li>
                            <hr />
                            <li><Link href="/">Services</Link></li>
                            <hr />
                            <li><Link href="/">Doctors</Link></li>
                            <hr />
                            <li><Link href="/">Contact</Link></li>
                            <hr />
                        </ul>
                    </div>
                )}
                {isShow && (
                    <div className='flex  px-4 bg-[#1F2B6C] w-screen my-1 py-2 z-50 absolute left-0'>
                        <input type='search' placeholder='Search' className='focus:outline-none bg-[#1F2B6C] p-2 rounded w-screen' />
                    </div>
                )}

            </div>


        </div>
    )
}

export default Navmobile
