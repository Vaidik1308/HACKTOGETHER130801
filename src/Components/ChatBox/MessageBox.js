import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaMicrophone } from 'react-icons/fa'
import { MdOutlineEmojiEmotions } from 'react-icons/md'

const MessageBox = () => {
  const [content,setContent] = useState('')
  const [lists,setLists] = useState([
    {
      id:"author",
      message:"Hey there"
    },
    {
      id:"other",
      message:"Hey how's you"
    },
    
])

const handleSubmit = (e) => {
  // e.preventDefault()
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
  console.log(updatedList);
}

const el = document.getElementById('chat-feed');
// id of the chat container ---------- ^^^
if (el) {
  el.scrollTop = el.scrollHeight;
}

  return (
    <main className=' z-6  duration-500 bg-[#F0F0F0]  w-[95%] font-Inter lg:w-[35%] absolute overflow-x-hidden overflow-y-auto right-[445px] top-[200px] z-2 h-[78vh] rounded-[10px] justify-start flex flex-col '>
      <section className='w-full chat-head min-h-[15vh] overflow-y-hidden'>
        <article className=' py-[14px]  flex justify-start w-[100%] mx-auto'>
            <div className='w-[85%] ml-4 flex justify-start'>
              <div className='w-[18%] flex justify-center items-center rounded-[50%] h-[12vh] ml-2'>
                  <img className='rounded-[50%] w-[100%] h-[11vh]' src='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt="" />
              </div>
              <div className='flex flex-col justify-center items-start w-[65%] ml-8'>
                  <h2 className='font-[600] text-[35px]'>Raman</h2>
                  <p className='font-[400] text-[18px]'>Wev Developer</p>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center w-[10%]'>
              <BsThreeDots className='text-3xl'/>
            </div>
        </article>
            
      </section>
      <div className='w-full h-fit'>
        <section className='w-full min-h-[55vh] overflow-y-auto chat-feed flex flex-col justify-start pt-4 scroll'>
            {lists.map((list) => (
              list.id === 'author' ? 
              <section className=' w-full flex justify-end h-fit my-1 rounded-[10px]'>
                <div className='w-[55%] h-fit flex justify-start items-center bg-[#3469B9] p-2 rounded-[10px] mr-2'>
                  <p className='w-full text-[#FFFFFF] text-[18px] break-words'>{list.message}</p>
                </div>
              </section>
              :
              <section className='ml-2 my-1 w-full h-fit flex justify-start'>
                <div className='w-fit h-fit flex justify-start items-center bg-[#D9D9D9] p-2 rounded-[10px] mr-2'>
                  <p className='w-full text-black text-[18px]'>{list.message}</p>
                </div>
              </section>
            ))}
        </section>
      </div>
      <section className='w-full bg-[#CDCDCD] flex relative min-h-[50px] '>
        <form onSubmit={(e)=> e.preventDefault()} className='w-full' action="">
          <div className='w-[70%] pr-2 h-[50px] flex justify-center items-center'>
            <input value={content}  onChange={(e) => setContent(e.target.value)} className='bg-[#CDCDCD] w-full h-[50px] p-2 text-[20px] outline-none' placeholder='Type your message here..' type="text" name="" id="" />
          </div>
          <div className='absolute right-[12px] flex justify-center items-center top-[8px]'>
            <button className='text-[20px]'><FaMicrophone/></button>
            <button className='mx-[15px] text-[26px]'><MdOutlineEmojiEmotions className=' text-gray-500 ' /></button>
            <button className='mx-[0px] '><img src={require('../../images/chat/pin.png')} alt="" /></button>
            <button onKeyPress={(e) => e.key = 'Enter' && handleSubmit()} type='submit' onClick={() => handleSubmit()} className='ml-[20px] '><img src={require('../../images/chat/SEND button.png')} alt="" /></button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default MessageBox