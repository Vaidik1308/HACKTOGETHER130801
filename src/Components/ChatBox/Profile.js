import React from 'react'
import {FaTimes} from 'react-icons/fa';

const Profile = ({isChatBox,setIsMessageBox,isMessageBox,isProfile,setIsProfile}) => {
  return (
    <section style={isProfile && isMessageBox && isChatBox ? {translate:"0px"} : {translate:"1500px"}} className=' z-10 duration-[2000ms] w-[30%] rounded-[10px] left-[65px] top-[200px] h-[65vh] absolute bg-white '>
        <article className=' h-[52vh] relative overflow-y-hidden  '>
            
                <div className='bg-[#49A5C3] w-[100%] h-[22vh] flex justify-end p-2'>
                    <button onClick={() => setIsProfile(false)} className='w-full flex justify-end' ><FaTimes className='text-[26px]' /></button>

                    <img className='rounded-[50%] w-[148px] z-[100] h-[142px]  top-[50px] left-[150px] absolute' src='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt="" />
                </div>
                <article className='bg-[#CECECE] w-[100%] h-[16vh] flex flex-col justify-end items-center pb-1'>
                    <h3 className='text-[35px] font-[600]'>Raman</h3>
                    <p className='text-[15px]'>Web Developer</p>
                </article>
        </article>
        
    </section>
  )
}

export default Profile