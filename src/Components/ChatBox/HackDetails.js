import React from 'react'
import {FaTimes} from 'react-icons/fa';

const HackDetails = ({setIsDetails}) => {
  return (
    <div className='w-[70%] bg-[#D9D9D9]  h-[95vh] flex flex-col justify-center gap-2 font-Inter relative'>
        <FaTimes onClick={() => setIsDetails(false)} className='absolute  text-[2rem] top-[16px] right-[13px]'/>
        <section className='w-[98%] mx-auto pl-4  bg-[#CACACA] h-[35vh] rounded-md flex justify-center items-center'>
            <article className='w-[16%] relative left-[1%]' >
                <img src={require('../../images/hackathonimage.png')} className='rounded-[50%] w-[100%]' alt="" />
            </article>
            <article className='w-[85%] bg-white h-[19vh] right-[3.3%] rounded-md relative flex flex-col justify-center'>
                <div className='flex justify-between items-center mx-auto w-[92%] font-[600]'>
                    <div className='flex w-[10%] h-[29px] items-center justify-center bg-[#DEDEDE] rounded-md'>
                        <img className='w-[30%]  rounded-[50%]  bg-[#DEDEDE]' src={require('../../images/web.png')} alt="" />
                        <p className='font-[600]'>Online</p>
                    </div>
                    <div className='flex w-[22%] justify-between'>
                        <div className='flex w-[40%] justify-center items-center rounded-md p-[5px] bg-[#DEDEDE]'>
                            <img className='w-[29%] h-[20px] mr-1' src={require('../../images/wallet_money.png')} alt="" />
                            <p>Free</p>
                        </div>
                        <div className='flex w-[40%] justify-center items-center rounded-md p-[5px] bg-[#DEDEDE]'>
                            <img className='w-[29%] h-[18px] mr-1' src={require('../../images/bookmark.png')} alt="" />
                            <p>Save</p>
                        </div>
                    </div>
                </div>
                <div className='flex w-full justify-center items-end ml-2'>
                    <div className='w-[42%]'>
                        <h2 className='text-[1.8rem] font-[700]'>Hack-T-Gor</h2>
                        <p className='text-[1.3rem] font-[500]'>Galgotias University , Greater Noida</p>
                    </div>
                    <div className='flex justify-center items-center w-[10%] mx-8'>
                        <img className='w-[20%]' src={require('../../images/clock.png')} alt="" />
                        <p className='text-[1rem] w-full font-[700]'>Time left</p>
                    </div>
                    <div className='flex w-[18%] h-[32px] justify-center lg:h-[37px] flex-col items-center bg-[#DEDEDE] lg:p-1 rounded-md lg:px-2'>
                        <img className='w-[12%] lg:w-[10%]' src={require('../../images/people_2.png')} alt="" />
                        <p className=' text-[0.56rem] w-full font-[600] text-center lg:text-[10px]'>Team Size 2-4 members</p>
                    </div>
                    <div className='w-[10%] flex justify-center items-end mt-2 mx-4 ml-8'>
                        <button className='text-[0.75rem]  w-[64%] h-[29px] lg:mb-0 lg:w-[100%] lg:h-[30px] bg-[#2B29AB] text-white font-[600] lg:text-[14px] lg:p-1 rounded-md '>Register</button>
                    </div>
                </div>
            </article>
        </section>
        <section className='bg-white w-[98%] mx-auto h-[55vh] flex justify-center items-center  rounded-md'>
            <article className='w-[95%] bg-white justify-center items-center flex h-[55vh]'>
                <div className='w-[20%] h-[50vh] flex flex-col justify-evenly '>
                    <div className='flex w-[90%] gap-5 items-end justify-center '>
                        <img className='w-[10%] h-[20px] mb-1' src={require('../../images/tick.png')} alt="" />
                        <button className='text-[0.75rem]   w-[64%] h-[29px] lg:mb-0 lg:w-[60%] lg:h-[32px] bg-[#2B29AB] text-white font-[500] lg:text-[16px] lg:p-1 rounded-md '>DETAILS</button>
                    </div>
                    <div className='flex w-[90%] gap-5 items-end justify-center '>
                        <img className='w-[10%] h-[16px] mb-1' src={require('../../images/123.png')} alt="" />
                        <button className='text-[0.75rem]   w-[64%] h-[29px] lg:mb-0 lg:w-[60%] lg:h-[32px] bg-[#2B29AB] text-white font-[500] lg:text-[16px] lg:p-1 rounded-md '>DETAILS</button>
                    </div>
                    <div className='flex w-[90%] gap-5 items-end justify-center '>
                        <img className='w-[10%] h-[20px] mb-1' src={require('../../images/tick.png')} alt="" />
                        <button className='text-[0.75rem]   w-[64%] h-[29px] lg:mb-0 lg:w-[60%] lg:h-[32px] bg-[#2B29AB] text-white font-[500] lg:text-[16px] lg:p-1 rounded-md '>DETAILS</button>
                    </div>
                    <div className='flex w-[90%] gap-5 items-end justify-center '>
                        <img className='w-[10%] h-[20px] mb-1' src={require('../../images/details2.png')} alt="" />
                        <button className='text-[0.75rem]   w-[64%] h-[29px] lg:mb-0 lg:w-[60%] lg:h-[32px] bg-[#2B29AB] text-white font-[500] lg:text-[16px] lg:p-1 rounded-md '>DETAILS</button>
                    </div>
                    <div className='flex w-[90%] gap-5 items-end justify-center '>
                        <img className='w-[10%] h-[20px] mb-1' src={require('../../images/startdetails.png')} alt="" />
                        <button className='text-[0.75rem]   w-[64%] h-[29px] lg:mb-0 lg:w-[60%] lg:h-[32px] bg-[#2B29AB] text-white font-[500] lg:text-[16px] lg:p-1 rounded-md '>DETAILS</button>
                    </div>
                    
                
                </div>
                <article className='bg-[#D9D9D9] w-[80%] h-[52vh] rounded-md'></article>
            </article>
            
        </section>
    </div>
  )
}

export default HackDetails