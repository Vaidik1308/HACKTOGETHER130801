import React,{ useState} from 'react';
import {FaTimes} from 'react-icons/fa';
import MessageBox from './MessageBox';





const ChatBox = ({setIsMessageBox}) => {
    const [isChatBox,setIsChatBox] = useState(true);
    // const [isGroup,setIsGroup] = useState(false);
    
    
   
    
  return (
    <div style={isChatBox ? {translate:"15px"}:  {translate:"480px"} }  className=' duration-500 bg-[#F0F0F0] chatbox w-[95%] font-Inter lg:w-[28%] absolute overflow-x-hidden overflow-y-hidden right-[28px] top-[200px] z-2 h-[78vh] rounded-md justify-center items-center'>
        <section className='w-full my-2 mb-8'>
            <article className='flex w-full justify-between'>
                <div className='flex w-[55%] justify-start ml-4 items-center '>
                    <img className=' mr-1 w-[8%] h-[3vh]' src={require('../../images/mssg.png')} alt="" />
                    <h2 className='text-[30px] font-[600]'>Messaging</h2>
                </div>
                <div className='w-[15%] flex justify-end mr-2 mt-2'>
                    <FaTimes onClick={() => setIsChatBox(false)} className='text-[1.6rem]' />
                </div>
            </article>
            <article className='w-full flex justify-center mt-2 relative'>
                <button><img className='absolute w-[4.5%] left-[28px] top-[16px]' src={require('../../images/chat/search.png')} alt="" /></button>
                <button><img className='absolute w-[4.5%] right-[60px] top-[16px]' src={require('../../images/chat/cross.png')} alt="" /></button>
                <button><img className='absolute w-[5.5%] right-[28px] top-[12px]' src={require('../../images/chat/filter.png')} alt="" /></button>
                <input type="text" placeholder='Search messages' className='w-[92%] h-[7vh] rounded-md border-[1px] border-[#5470FF] outline-none p-2 pr-[80px] pl-[44px] text-[1.2rem]' name="" id="" />
            </article>
            <article className='w-full flex justify-center gap-4 mt-2'>
                <div className='w-[45%] flex flex-col justify-center items-center'>
                    <p className='text-[22px] font-[600]'>Chats</p>
                    <div className='w-[100%] border-b-[8px]   border-[#3469B9] rounded-lg'></div>
                </div>
                <div className='w-[45%] flex flex-col justify-center items-center'>
                    <p className='text-[22px] font-[600]'>Groups</p>
                    <div className='w-[100%] border-b-[8px]   border-[#9B9B9B] rounded-lg'></div>
                </div>
            </article>
        </section>
        <section className='w-full flex justify-start flex-col overflow-y-auto overflow-x-hidden'>
            <button onClick={() => setIsMessageBox(true)} className='flex justify-start w-[100%]'>
                <article className=' py-[14px] individual flex justify-start w-[100%] mx-auto'>
                    <div className='w-[15%] rounded-[50%] h-[9vh] ml-2'>
                        <img className='rounded-[50%] w-full h-[9vh]' src='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-start w-[65%] ml-8'>
                        <h2 className='font-[600] text-[18px]'>Raman</h2>
                        <p className='font-[400] text-[15px]'>Want to connect with me?</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[10%]'>
                        <div className='w-[20px] bg-[#3469B9] h-[19px] text-[8px] font-[700] flex justify-center items-center text-white rounded-[50%]'>2</div>
                        <p>3:35</p>
                    </div>
                </article>
            </button>
        </section>
        
    </div>
  )
}

export default ChatBox