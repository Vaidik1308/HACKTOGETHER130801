import React, { useRef, useState } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import { BsThreeDots } from 'react-icons/bs'
import { FaMicrophone } from 'react-icons/fa'
import { MdOutlineEmojiEmotions } from 'react-icons/md'
import {FaTimes} from 'react-icons/fa';



const MessageBox = ({setIsProfile,setIsMessageBox,isMessageBox,isChatBox}) => {
  const textBox = useRef()
  const [content,setContent] = useState('')
  
  const [lists,setLists] = useState([
    {
      id:"other",
      message:"Hello sir,I am a web developer with two years of experience.Can i be the part of your team."
    },
    {
      id:"author",
      message:"Okay, I will connect with my team and will review your resume! Then we’ll let you know, if you can work with Hack-Together or not."
    },
    
])

const handleSubmit = (e) => {
  e.preventDefault()
  if (content===''){
    return 
  }
  const id = 'author'
  const newList = {id,
    message:content
  }
  const updatedList = [...lists,newList]
  setLists(updatedList)
  setContent('')
  // console.log(updatedList);
  textBox.current.focus()
  
}



  return (
    <main style={isMessageBox && isChatBox  ? {translate:"0px"} : {translate:"1180px"}} className=' z-20 duration-500 bg-[#F0F0F0]  w-[95%] font-Inter lg:w-[35%] absolute overflow-x-hidden overflow-y-auto right-[445px] top-[200px] z-2 h-[78vh] rounded-[10px] justify-start flex flex-col '>
      <section className='w-full chat-head min-h-[15vh] overflow-y-hidden'>
        
            <article className=' py-[14px]  flex justify-start w-[100%] mx-auto'>
            <button className='w-full' onClick={() => setIsProfile(true)} >
              <div className='w-[100%] ml-4 flex justify-start'>
                <div className='w-[18%] flex justify-center items-center rounded-[50%] h-[12vh] ml-2'>
                    <img className='rounded-[50%] w-[100%] h-[11vh]' src='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt="" />
                </div>
                <div className='flex flex-col justify-center items-start w-[65%] ml-8'>
                    <h2 className='font-[600] text-[35px]'>Raman</h2>
                    <p className='font-[400] text-[18px]'>Wev Developer</p>
                </div>
              </div>
            </button>
            <div className='flex flex-col justify-center items-center gap-6 w-[10%] '>
              <button className='' onClick={() => setIsMessageBox(false)} ><FaTimes className='text-[26px]' /></button>
              <BsThreeDots className='text-3xl'/>
            </div>
            </article>
        
            
      </section>
      <ScrollToBottom className=' scroll-m-1 w-full h-[58vh] scrollbar'>
        <section className='w-full min-h-[55vh] overflow-y-auto chat-feed flex flex-col justify-start items-end pt-4 scroll'>
            {lists.map((list) => (
              list.id === 'author' ? 
              <section className=' w-[55%] flex justify-end h-fit my-1 rounded-[10px]'>
                <div className='w-fit h-fit flex justify-start items-center bg-[#3469B9] p-2 rounded-[10px] mr-2'>
                  <p className='w-full text-[#FFFFFF] text-[18px] break-words'>{list.message}</p>
                </div>
              </section>
              :
              <section className='ml-2 my-1 w-full h-fit flex justify-start'>
                <div className='h-fit flex justify-start w-[55%]'>
                  <div className='ml-2 w-fit h-fit flex justify-start items-center bg-[#D9D9D9] p-2 rounded-[10px] mr-2'>
                    <p className='w-full text-black text-[18px]'>{list.message}</p>
                  </div>
                </div>
              </section>
            ))}
        </section>
      </ScrollToBottom>
      <section className='w-full bg-[#CDCDCD] flex relative min-h-[50px] '>
        <form onSubmit={(e)=> handleSubmit(e)} className='w-full' action="">
          <div className='w-[70%] pr-2 h-[50px] flex justify-center items-center'>
            <input value={content} ref={textBox}  onChange={(e) => setContent(e.target.value)} className='bg-[#CDCDCD] w-full h-[50px] p-2 text-[20px] outline-none' placeholder='Type your message here..' type="text" name="" id="" />
          </div>
          <div className='absolute right-[12px] flex justify-center items-center top-[8px]'>
            <button className='text-[20px]'><FaMicrophone/></button>
            <button className='mx-[15px] text-[26px]'><MdOutlineEmojiEmotions className=' text-gray-500 ' /></button>
            <button className='mx-[0px] '><img src={require('../../images/chat/pin.png')} alt="" /></button>
            <button  type='submit' onClick={(e) => handleSubmit(e)} className='ml-[20px] '><img src={require('../../images/chat/SEND button.png')} alt="" /></button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default MessageBox