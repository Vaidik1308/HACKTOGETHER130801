import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';
import {FaTimes} from 'react-icons/fa';

const NavBar = () => {


    const [isBurger,setIsBurger] = useState(true)
  return (
    <div className='lg:text-[17px] font-Inter lg:flex lg:justify-between lg:h-[9vh] lg:mt-2 lg:items-center lg:mx-2 overflow-hidden'>
        <section className=' lg:w-fit '>
            <img className='lg:w-[65%]' src={require('../images/LOGO.png')} alt="" />
        </section>
        <section className=' lg:w-[18%]  '>
            <form className='lg:w-full text-black' action="">
                <label className='lg:relative lg:w-full' htmlFor="searchHack"></label>
                <span className='relative top-[28px] left-[7px] text-[1.25rem]'>
                    <AiOutlineSearch/>
                </span>
                <input placeholder='Search Hackthons' type="text" className='relative bottom-[10px] outline-none lg:font-[400] text-black lg:h-[5.5vh] lg:rounded-[8px] lg:p-2 border-[2px] border-[#5470FF] lg:pl-[32px] lg:w-[100%]' name="" id="searchHack" />
            </form>
        </section>
        <section className='lg:w-[45%] lg:mr-16'>
            <ul className='lg:flex hidden lg:justify-evenly lg:font-[700] text-[13px]'>
                <Link className=' lg:w-[20%] lg:items-center lg:h-[5vh] lg:rounded-lg lg:flex lg:justify-center lg:bg-[#222224]'>Home</Link>
                <Link className=' lg:w-[20%] lg:items-center lg:h-[5vh] lg:rounded-lg lg:flex lg:justify-center lg:bg-[#222224]'>Hackathons</Link>
                <Link className='lg:w-[20%] lg:items-center lg:h-[5vh] lg:rounded-lg lg:flex lg:justify-center lg:bg-[#222224]'>My Networks</Link>
                <Link className=' lg:w-[29%] lg:items-center lg:h-[5vh] lg:rounded-lg lg:flex lg:justify-center lg:bg-[#222224]'>Host a hackathon</Link>
            </ul>
            <ul style={isBurger ? {translate:"0px"}: {translate:"412px"}} className=' duration-500  lg:hidden flex flex-col bg-white text-black w-[55%] items-start pl-4 h-[70vh] absolute z-10 right-[12px] top-[5px] rounded-md justify-start gap-10 font-[700] text-[18px]'>
                <div className='w-[95%] mt-2 text-[32px] flex justify-end'><p onClick={() => setIsBurger(false)}><FaTimes/></p></div>
                <Link className='bg-black text-white w-[40%] text-center rounded-md h-[5vh] p-1 lg:items-center lg:h-[5vh] lg:rounded-lg lg:flex lg:justify-center lg:bg-[#222224]'>Home</Link>
                <Link className='bg-black text-white w-[70%] text-center rounded-md h-[5vh] p-1 lg:w-[20%] lg:items-center lg:h-[5vh] lg:rounded-lg lg:flex lg:justify-center lg:bg-[#222224]'>Hackathons</Link>
                <Link className='bg-black text-white w-[80%] text-center rounded-md h-[5vh] p-1 lg:w-[20%] lg:items-center lg:h-[5vh] lg:rounded-lg lg:flex lg:justify-center lg:bg-[#222224]'>My Networks</Link>
                <Link className='bg-black text-white w-[95%] text-center rounded-md h-[5vh] p-1 lg:w-[29%] lg:items-center lg:h-[5vh] lg:rounded-lg lg:flex lg:justify-center lg:bg-[#222224]'>Host a hackathon</Link>
            </ul>
        </section>
        <section className=' lg:flex lg:justify-evenly  lg:w-[15%] lf:ml-1 lg:font-[]'>
            <button className='lg:text-white lg:h-[5vh] lg:w-[45%] lg:rounded-[20px] lg:bg-[#2B29AB]'>Login</button>
            <button className='lg:text-black lg:h-[5vh] lg:w-[45%] lg:rounded-[20px] lg:bg-white'>Sign up</button>
        </section>
    </div>
  )
}

export default NavBar