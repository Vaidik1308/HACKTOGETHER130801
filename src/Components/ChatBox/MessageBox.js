import React from 'react'
// import { useParams } from 'react-router-dom'


const MessageBox = ({head}) => {

  // console.log(JSON.stringify(title));
  return (
    <>
    {/* header section */}
      <article className='bg-white w-[100%] rounded-b-[15px] h-[8vh]' >
        <div className='flex justify-start pl-4 items-center h-[7vh]'>
          <h2 className='text-black font-[600] text-[22px]'>Name</h2>
        </div>
      </article>


      {/* input section */}
      <article className='bg-white w-[95%] mx-auto rounded-md h-[7vh]'>
        <form className='w-full' action="">
          <input className='text-[20px] p-2 w-[95%] mx-auto outline-none pr-[52px]' type="text" placeholder='Enter message' />
          <button className='absolute right-[30px] bottom-[58px]'>Send</button>
        </form>
      </article>
    </>
  )
}

export default MessageBox