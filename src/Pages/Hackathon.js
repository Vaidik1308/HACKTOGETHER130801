import React from 'react'
import Ads from './Ads';

import { BsCurrencyRupee } from 'react-icons/bs';
import ChatBox from '../Components/ChatBox/ChatBox';


const Hackathon = () => {
  return (
    <>
      <Ads/>
      <div className='alignment lg:mb-4  lg:h-fit w-full lg:mt-4 text-black font-Inter mt-[20px] overflow-x-hidden'>
        <section className='lg:w-[95%] lg:h-[36vh] bg-white flex justify-between w-[95%] h-[26vh] mx-auto'>
          <article className='mt-2 flex flex-col w-[58%] lg:w-[58%]  lg:ml-[30px]'>
            <div className='flex w-full lg:flex lg:w-full lg:justify-start lg:mt-2'>
              <div className='lg:w-[44%] w-[35%] ml-1'>
                <img className='w-[100%] relative lg:right-2' src={require('../images/hackathon_image.png')} alt="" />
              </div>
              <div className='w-[65%] flex items-end ml-2 lg:h-[8vh] lg:w-[65%] lg:ml-4'>
                <div className='flex w-[85%] lg:w-[85%]'>
                  <img className='lg:w-[30%] w-[25%] h-[20px]' src={require('../images/web.png')} alt="" />
                  <p className='text-[0.75rem] mt-1 lg:text-[0.8rem] font-[400] lg:mt-[2px]'>Online</p>
                </div>
                <div className='flex ml-[14px] w-[85%] lg:justify-start lg:w-[85%] lg:ml-4 relative lg:top-[0px]'>
                  <img className='w-[22%] h-[16px] lg:w-[22%] lg:h-[10%] lg:mt-[6px]' src={require('../images/wallet_money.png')} alt="" />
                  <p className='text-[0.75rem] ml-[2px] lg:text-[0.8rem] lg:mt-1 lg:ml-[4px] lg:font-[600]'>Free</p>
                </div>
              </div>
            </div>
            <div className='w-[100%] flex flex-col lg:w-[100%] lg:mt-2 ml-[12px] lg:ml-0 mt-2'>
              <h2 className=' text-[18px] font-[700] lg:text-[20px]'>Hack-T-Gor</h2>
              <p className='w-full text-[11px] lg:text-[11px] font-[400]'>Galgotias University , Greater Noida</p>
            </div>
            <div className=' mt-1 ml-[12px]  lg:ml-0 flex w-[100%] justify-center lg:text-[10px] lg:w-[88%] lg:mt-1'> 
              <div className='flex w-[50%] lg:w-[72%] lg:pr-1 lg:mr-3 lg:mt-[1px]'>
                <img className='w-[10%] relative top-[3px] mr-[2px] h-[10px] lg:w-[15%] lg:mr-[1px]  lg:h-[14px]' src={require('../images/location.png')} alt="" />
                <p className='w-[100%] text-[0.64rem] font-[800] lg:w-[100%] mt-[1px] lg:mt-[2px]'>Get location</p>
              </div>
              <div className='flex justify-center items-center relative right-[11px]  w-[55%] px-1 h-[18px] lg:w-[100%] lg:h-[22px] lg:p-1 bg-[#C5C5CF] rounded-sm'>
                <img className='w-[10%]  mx-[2px] h-[10px] lg:w-[10%]  lg:h-[11px] lg:mr-[2px]' src={require('../images/calendar.png')} alt="" />
                <div className='w-[100%] flex text-[8px] font-[600] lg:w-[100%] lg:text-[9px]'>
                  <span>11 Apr</span>
                  <span> - </span>
                  <span>12 Apr, 2023</span>
                </div>
              </div>
            </div>
            <div className='w-[100%] flex mt-[18px] text-[0.5rem] lg:text-[0.55rem] font-[500] lg:mt-4 ml-[12px] lg:ml-0'>
              <div className='flex w-[30%] p-[2px] lg:p-none  h-[25px] lg:w-[30%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md'>
                <img className='w-[22%] h-[45%] lg:w-[19%] lg:mr-[5px]' src={require('../images/medal.png')} alt="" />
                <span><BsCurrencyRupee/></span><p>10,000</p>
              </div>
              <div className='flex mx-[5px] w-[40%] lg:w-[30%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md lg:mx-[12px]'>
                <img className=' w-[22%] h-[15px] lg:mr-[5px] mr-[4px]' src={require('../images/people.png')} alt="" />
                <p>80 joined</p>
              </div>
              <div className='flex w-[42%] h-[25px] lg:w-[38%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md'>
                <img className='lg:mr-[5px] mr-[2px]' src={require('../images/like_icon.png')} alt="" />
                <p>15 Interested</p>
              </div>
            </div>
          </article>
          <article className=' w-[40%]  lg:mb-4 flex flex-col justify-between lg:text-[0.8rem] lg:w-[40%]'>
            <div className='flex justify-end mt-[6px] mr-[8px] lg:mt-2 lg:mr-4'>
              <p className='text-[12px] font-[600] lg:text-[12px] mr-1 lg:mr-2'>Save</p>
              <img src={require('../images/bookmark.png')} alt="" />
            </div>
            <div className='flex flex-col items-center mb-[12px] lg:mb-0 justify-center lg:justify-center lg:items-center'>
              <div className='flex w-[85%] h-[32px] justify-center lg:h-[44px] flex-col items-center bg-[#C5C5CF] lg:p-1 rounded-md lg:px-2'>
                <img className='w-[12%] lg:w-[10%]' src={require('../images/people_2.png')} alt="" />
                <p className=' text-[0.56rem] lg:text-[10px]'>Team Size 2-4 members</p>
              </div>
              <button className=' my-1  text-[0.75rem] lg:my-2 lg:bg-[#C5C5CF] lg:w-[43%] lg:h-[29px] font-[600] lg:text-[10px] lg:p-1 rounded-md'>Details</button>
              <button className='text-[0.75rem]  w-[64%] h-[29px] lg:mb-2 lg:w-[43%] lg:h-[32px] bg-[#2B29AB] text-white font-[600] lg:text-[10px] lg:p-1 rounded-md'>Register</button>
            </div>
          </article>
        </section>
        <section className='lg:w-[95%] lg:h-[36vh] bg-white flex justify-between w-[95%] h-[26vh] mx-auto'>
          <article className='mt-2 flex flex-col w-[58%] lg:w-[58%]  lg:ml-[30px]'>
            <div className='flex w-full lg:flex lg:w-full lg:justify-start lg:mt-2'>
              <div className='lg:w-[44%] w-[35%] ml-1'>
                <img className='w-[100%] relative lg:right-2' src={require('../images/hackathon_image.png')} alt="" />
              </div>
              <div className='w-[65%] flex items-end ml-2 lg:h-[8vh] lg:w-[65%] lg:ml-4'>
                <div className='flex w-[85%] lg:w-[85%]'>
                  <img className='lg:w-[30%] w-[25%] h-[20px]' src={require('../images/web.png')} alt="" />
                  <p className='text-[0.75rem] mt-1 lg:text-[0.8rem] font-[400] lg:mt-[2px]'>Online</p>
                </div>
                <div className='flex ml-[14px] w-[85%] lg:justify-start lg:w-[85%] lg:ml-4 relative lg:top-[0px]'>
                  <img className='w-[22%] h-[16px] lg:w-[22%] lg:h-[10%] lg:mt-[6px]' src={require('../images/wallet_money.png')} alt="" />
                  <p className='text-[0.75rem] ml-[2px] lg:text-[0.8rem] lg:mt-1 lg:ml-[4px] lg:font-[600]'>Free</p>
                </div>
              </div>
            </div>
            <div className='w-[100%] flex flex-col lg:w-[100%] lg:mt-2 ml-[12px] lg:ml-0 mt-2'>
              <h2 className=' text-[18px] font-[700] lg:text-[20px]'>Hack-T-Gor</h2>
              <p className='w-full text-[11px] lg:text-[11px] font-[400]'>Galgotias University , Greater Noida</p>
            </div>
            <div className=' mt-1 ml-[12px]  lg:ml-0 flex w-[100%] justify-center lg:text-[10px] lg:w-[88%] lg:mt-1'> 
              <div className='flex w-[50%] lg:w-[72%] lg:pr-1 lg:mr-3 lg:mt-[1px]'>
                <img className='w-[10%] relative top-[3px] mr-[2px] h-[10px] lg:w-[15%] lg:mr-[1px]  lg:h-[14px]' src={require('../images/location.png')} alt="" />
                <p className='w-[100%] text-[0.64rem] font-[800] lg:w-[100%] mt-[1px] lg:mt-[2px]'>Get location</p>
              </div>
              <div className='flex justify-center items-center relative right-[11px]  w-[55%] px-1 h-[18px] lg:w-[100%] lg:h-[22px] lg:p-1 bg-[#C5C5CF] rounded-sm'>
                <img className='w-[10%]  mx-[2px] h-[10px] lg:w-[10%]  lg:h-[11px] lg:mr-[2px]' src={require('../images/calendar.png')} alt="" />
                <div className='w-[100%] flex text-[8px] font-[600] lg:w-[100%] lg:text-[9px]'>
                  <span>11 Apr</span>
                  <span> - </span>
                  <span>12 Apr, 2023</span>
                </div>
              </div>
            </div>
            <div className='w-[100%] flex mt-[18px] text-[0.5rem] lg:text-[0.55rem] font-[500] lg:mt-4 ml-[12px] lg:ml-0'>
              <div className='flex w-[30%] p-[2px] lg:p-none  h-[25px] lg:w-[30%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md'>
                <img className='w-[22%] h-[45%] lg:w-[19%] lg:mr-[5px]' src={require('../images/medal.png')} alt="" />
                <span><BsCurrencyRupee/></span><p>10,000</p>
              </div>
              <div className='flex mx-[5px] w-[40%] lg:w-[30%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md lg:mx-[12px]'>
                <img className=' w-[22%] h-[15px] lg:mr-[5px] mr-[4px]' src={require('../images/people.png')} alt="" />
                <p>80 joined</p>
              </div>
              <div className='flex w-[42%] h-[25px] lg:w-[38%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md'>
                <img className='lg:mr-[5px] mr-[2px]' src={require('../images/like_icon.png')} alt="" />
                <p>15 Interested</p>
              </div>
            </div>
          </article>
          <article className=' w-[40%]  lg:mb-4 flex flex-col justify-between lg:text-[0.8rem] lg:w-[40%]'>
            <div className='flex justify-end mt-[6px] mr-[8px] lg:mt-2 lg:mr-4'>
              <p className='text-[12px] font-[600] lg:text-[12px] mr-1 lg:mr-2'>Save</p>
              <img src={require('../images/bookmark.png')} alt="" />
            </div>
            <div className='flex flex-col items-center mb-[12px] lg:mb-0 justify-center lg:justify-center lg:items-center'>
              <div className='flex w-[85%] h-[32px] justify-center lg:h-[44px] flex-col items-center bg-[#C5C5CF] lg:p-1 rounded-md lg:px-2'>
                <img className='w-[12%] lg:w-[10%]' src={require('../images/people_2.png')} alt="" />
                <p className=' text-[0.56rem] lg:text-[10px]'>Team Size 2-4 members</p>
              </div>
              <button className=' my-1  text-[0.75rem] lg:my-2 lg:bg-[#C5C5CF] lg:w-[43%] lg:h-[29px] font-[600] lg:text-[10px] lg:p-1 rounded-md'>Details</button>
              <button className='text-[0.75rem]  w-[64%] h-[29px] lg:mb-2 lg:w-[43%] lg:h-[32px] bg-[#2B29AB] text-white font-[600] lg:text-[10px] lg:p-1 rounded-md'>Register</button>
            </div>
          </article>
        </section>
        <section className='lg:w-[95%] lg:h-[36vh] bg-white flex justify-between w-[95%] h-[26vh] mx-auto'>
          <article className='mt-2 flex flex-col w-[58%] lg:w-[58%]  lg:ml-[30px]'>
            <div className='flex w-full lg:flex lg:w-full lg:justify-start lg:mt-2'>
              <div className='lg:w-[44%] w-[35%] ml-1'>
                <img className='w-[100%] relative lg:right-2' src={require('../images/hackathon_image.png')} alt="" />
              </div>
              <div className='w-[65%] flex items-end ml-2 lg:h-[8vh] lg:w-[65%] lg:ml-4'>
                <div className='flex w-[85%] lg:w-[85%]'>
                  <img className='lg:w-[30%] w-[25%] h-[20px]' src={require('../images/web.png')} alt="" />
                  <p className='text-[0.75rem] mt-1 lg:text-[0.8rem] font-[400] lg:mt-[2px]'>Online</p>
                </div>
                <div className='flex ml-[14px] w-[85%] lg:justify-start lg:w-[85%] lg:ml-4 relative lg:top-[0px]'>
                  <img className='w-[22%] h-[16px] lg:w-[22%] lg:h-[10%] lg:mt-[6px]' src={require('../images/wallet_money.png')} alt="" />
                  <p className='text-[0.75rem] ml-[2px] lg:text-[0.8rem] lg:mt-1 lg:ml-[4px] lg:font-[600]'>Free</p>
                </div>
              </div>
            </div>
            <div className='w-[100%] flex flex-col lg:w-[100%] lg:mt-2 ml-[12px] lg:ml-0 mt-2'>
              <h2 className=' text-[18px] font-[700] lg:text-[20px]'>Hack-T-Gor</h2>
              <p className='w-full text-[11px] lg:text-[11px] font-[400]'>Galgotias University , Greater Noida</p>
            </div>
            <div className=' mt-1 ml-[12px]  lg:ml-0 flex w-[100%] justify-center lg:text-[10px] lg:w-[88%] lg:mt-1'> 
              <div className='flex w-[50%] lg:w-[72%] lg:pr-1 lg:mr-3 lg:mt-[1px]'>
                <img className='w-[10%] relative top-[3px] mr-[2px] h-[10px] lg:w-[15%] lg:mr-[1px]  lg:h-[14px]' src={require('../images/location.png')} alt="" />
                <p className='w-[100%] text-[0.64rem] font-[800] lg:w-[100%] mt-[1px] lg:mt-[2px]'>Get location</p>
              </div>
              <div className='flex justify-center items-center relative right-[11px]  w-[55%] px-1 h-[18px] lg:w-[100%] lg:h-[22px] lg:p-1 bg-[#C5C5CF] rounded-sm'>
                <img className='w-[10%]  mx-[2px] h-[10px] lg:w-[10%]  lg:h-[11px] lg:mr-[2px]' src={require('../images/calendar.png')} alt="" />
                <div className='w-[100%] flex text-[8px] font-[600] lg:w-[100%] lg:text-[9px]'>
                  <span>11 Apr</span>
                  <span> - </span>
                  <span>12 Apr, 2023</span>
                </div>
              </div>
            </div>
            <div className='w-[100%] flex mt-[18px] text-[0.5rem] lg:text-[0.55rem] font-[500] lg:mt-4 ml-[12px] lg:ml-0'>
              <div className='flex w-[30%] p-[2px] lg:p-none  h-[25px] lg:w-[30%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md'>
                <img className='w-[22%] h-[45%] lg:w-[19%] lg:mr-[5px]' src={require('../images/medal.png')} alt="" />
                <span><BsCurrencyRupee/></span><p>10,000</p>
              </div>
              <div className='flex mx-[5px] w-[40%] lg:w-[30%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md lg:mx-[12px]'>
                <img className=' w-[22%] h-[15px] lg:mr-[5px] mr-[4px]' src={require('../images/people.png')} alt="" />
                <p>80 joined</p>
              </div>
              <div className='flex w-[42%] h-[25px] lg:w-[38%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md'>
                <img className='lg:mr-[5px] mr-[2px]' src={require('../images/like_icon.png')} alt="" />
                <p>15 Interested</p>
              </div>
            </div>
          </article>
          <article className=' w-[40%]  lg:mb-4 flex flex-col justify-between lg:text-[0.8rem] lg:w-[40%]'>
            <div className='flex justify-end mt-[6px] mr-[8px] lg:mt-2 lg:mr-4'>
              <p className='text-[12px] font-[600] lg:text-[12px] mr-1 lg:mr-2'>Save</p>
              <img src={require('../images/bookmark.png')} alt="" />
            </div>
            <div className='flex flex-col items-center mb-[12px] lg:mb-0 justify-center lg:justify-center lg:items-center'>
              <div className='flex w-[85%] h-[32px] justify-center lg:h-[44px] flex-col items-center bg-[#C5C5CF] lg:p-1 rounded-md lg:px-2'>
                <img className='w-[12%] lg:w-[10%]' src={require('../images/people_2.png')} alt="" />
                <p className=' text-[0.56rem] lg:text-[10px]'>Team Size 2-4 members</p>
              </div>
              <button className=' my-1  text-[0.75rem] lg:my-2 lg:bg-[#C5C5CF] lg:w-[43%] lg:h-[29px] font-[600] lg:text-[10px] lg:p-1 rounded-md'>Details</button>
              <button className='text-[0.75rem]  w-[64%] h-[29px] lg:mb-2 lg:w-[43%] lg:h-[32px] bg-[#2B29AB] text-white font-[600] lg:text-[10px] lg:p-1 rounded-md'>Register</button>
            </div>
          </article>
        </section>
        <section className='lg:w-[95%] lg:h-[36vh] bg-white flex justify-between w-[95%] h-[26vh] mx-auto'>
          <article className='mt-2 flex flex-col w-[58%] lg:w-[58%]  lg:ml-[30px]'>
            <div className='flex w-full lg:flex lg:w-full lg:justify-start lg:mt-2'>
              <div className='lg:w-[44%] w-[35%] ml-1'>
                <img className='w-[100%] relative lg:right-2' src={require('../images/hackathon_image.png')} alt="" />
              </div>
              <div className='w-[65%] flex items-end ml-2 lg:h-[8vh] lg:w-[65%] lg:ml-4'>
                <div className='flex w-[85%] lg:w-[85%]'>
                  <img className='lg:w-[30%] w-[25%] h-[20px]' src={require('../images/web.png')} alt="" />
                  <p className='text-[0.75rem] mt-1 lg:text-[0.8rem] font-[400] lg:mt-[2px]'>Online</p>
                </div>
                <div className='flex ml-[14px] w-[85%] lg:justify-start lg:w-[85%] lg:ml-4 relative lg:top-[0px]'>
                  <img className='w-[22%] h-[16px] lg:w-[22%] lg:h-[10%] lg:mt-[6px]' src={require('../images/wallet_money.png')} alt="" />
                  <p className='text-[0.75rem] ml-[2px] lg:text-[0.8rem] lg:mt-1 lg:ml-[4px] lg:font-[600]'>Free</p>
                </div>
              </div>
            </div>
            <div className='w-[100%] flex flex-col lg:w-[100%] lg:mt-2 ml-[12px] lg:ml-0 mt-2'>
              <h2 className=' text-[18px] font-[700] lg:text-[20px]'>Hack-T-Gor</h2>
              <p className='w-full text-[11px] lg:text-[11px] font-[400]'>Galgotias University , Greater Noida</p>
            </div>
            <div className=' mt-1 ml-[12px]  lg:ml-0 flex w-[100%] justify-center lg:text-[10px] lg:w-[88%] lg:mt-1'> 
              <div className='flex w-[50%] lg:w-[72%] lg:pr-1 lg:mr-3 lg:mt-[1px]'>
                <img className='w-[10%] relative top-[3px] mr-[2px] h-[10px] lg:w-[15%] lg:mr-[1px]  lg:h-[14px]' src={require('../images/location.png')} alt="" />
                <p className='w-[100%] text-[0.64rem] font-[800] lg:w-[100%] mt-[1px] lg:mt-[2px]'>Get location</p>
              </div>
              <div className='flex justify-center items-center relative right-[11px]  w-[55%] px-1 h-[18px] lg:w-[100%] lg:h-[22px] lg:p-1 bg-[#C5C5CF] rounded-sm'>
                <img className='w-[10%]  mx-[2px] h-[10px] lg:w-[10%]  lg:h-[11px] lg:mr-[2px]' src={require('../images/calendar.png')} alt="" />
                <div className='w-[100%] flex text-[8px] font-[600] lg:w-[100%] lg:text-[9px]'>
                  <span>11 Apr</span>
                  <span> - </span>
                  <span>12 Apr, 2023</span>
                </div>
              </div>
            </div>
            <div className='w-[100%] flex mt-[18px] text-[0.5rem] lg:text-[0.55rem] font-[500] lg:mt-4 ml-[12px] lg:ml-0'>
              <div className='flex w-[30%] p-[2px] lg:p-none  h-[25px] lg:w-[30%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md'>
                <img className='w-[22%] h-[45%] lg:w-[19%] lg:mr-[5px]' src={require('../images/medal.png')} alt="" />
                <span><BsCurrencyRupee/></span><p>10,000</p>
              </div>
              <div className='flex mx-[5px] w-[40%] lg:w-[30%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md lg:mx-[12px]'>
                <img className=' w-[22%] h-[15px] lg:mr-[5px] mr-[4px]' src={require('../images/people.png')} alt="" />
                <p>80 joined</p>
              </div>
              <div className='flex w-[42%] h-[25px] lg:w-[38%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md'>
                <img className='lg:mr-[5px] mr-[2px]' src={require('../images/like_icon.png')} alt="" />
                <p>15 Interested</p>
              </div>
            </div>
          </article>
          <article className=' w-[40%]  lg:mb-4 flex flex-col justify-between lg:text-[0.8rem] lg:w-[40%]'>
            <div className='flex justify-end mt-[6px] mr-[8px] lg:mt-2 lg:mr-4'>
              <p className='text-[12px] font-[600] lg:text-[12px] mr-1 lg:mr-2'>Save</p>
              <img src={require('../images/bookmark.png')} alt="" />
            </div>
            <div className='flex flex-col items-center mb-[12px] lg:mb-0 justify-center lg:justify-center lg:items-center'>
              <div className='flex w-[85%] h-[32px] justify-center lg:h-[44px] flex-col items-center bg-[#C5C5CF] lg:p-1 rounded-md lg:px-2'>
                <img className='w-[12%] lg:w-[10%]' src={require('../images/people_2.png')} alt="" />
                <p className=' text-[0.56rem] lg:text-[10px]'>Team Size 2-4 members</p>
              </div>
              <button className=' my-1  text-[0.75rem] lg:my-2 lg:bg-[#C5C5CF] lg:w-[43%] lg:h-[29px] font-[600] lg:text-[10px] lg:p-1 rounded-md'>Details</button>
              <button className='text-[0.75rem]  w-[64%] h-[29px] lg:mb-2 lg:w-[43%] lg:h-[32px] bg-[#2B29AB] text-white font-[600] lg:text-[10px] lg:p-1 rounded-md'>Register</button>
            </div>
          </article>
        </section>
        <section className='lg:w-[95%] lg:h-[36vh] bg-white flex justify-between w-[95%] h-[26vh] mx-auto'>
          <article className='mt-2 flex flex-col w-[58%] lg:w-[58%]  lg:ml-[30px]'>
            <div className='flex w-full lg:flex lg:w-full lg:justify-start lg:mt-2'>
              <div className='lg:w-[44%] w-[35%] ml-1'>
                <img className='w-[100%] relative lg:right-2' src={require('../images/hackathon_image.png')} alt="" />
              </div>
              <div className='w-[65%] flex items-end ml-2 lg:h-[8vh] lg:w-[65%] lg:ml-4'>
                <div className='flex w-[85%] lg:w-[85%]'>
                  <img className='lg:w-[30%] w-[25%] h-[20px]' src={require('../images/web.png')} alt="" />
                  <p className='text-[0.75rem] mt-1 lg:text-[0.8rem] font-[400] lg:mt-[2px]'>Online</p>
                </div>
                <div className='flex ml-[14px] w-[85%] lg:justify-start lg:w-[85%] lg:ml-4 relative lg:top-[0px]'>
                  <img className='w-[22%] h-[16px] lg:w-[22%] lg:h-[10%] lg:mt-[6px]' src={require('../images/wallet_money.png')} alt="" />
                  <p className='text-[0.75rem] ml-[2px] lg:text-[0.8rem] lg:mt-1 lg:ml-[4px] lg:font-[600]'>Free</p>
                </div>
              </div>
            </div>
            <div className='w-[100%] flex flex-col lg:w-[100%] lg:mt-2 ml-[12px] lg:ml-0 mt-2'>
              <h2 className=' text-[18px] font-[700] lg:text-[20px]'>Hack-T-Gor</h2>
              <p className='w-full text-[11px] lg:text-[11px] font-[400]'>Galgotias University , Greater Noida</p>
            </div>
            <div className=' mt-1 ml-[12px]  lg:ml-0 flex w-[100%] justify-center lg:text-[10px] lg:w-[88%] lg:mt-1'> 
              <div className='flex w-[50%] lg:w-[72%] lg:pr-1 lg:mr-3 lg:mt-[1px]'>
                <img className='w-[10%] relative top-[3px] mr-[2px] h-[10px] lg:w-[15%] lg:mr-[1px]  lg:h-[14px]' src={require('../images/location.png')} alt="" />
                <p className='w-[100%] text-[0.64rem] font-[800] lg:w-[100%] mt-[1px] lg:mt-[2px]'>Get location</p>
              </div>
              <div className='flex justify-center items-center relative right-[11px]  w-[55%] px-1 h-[18px] lg:w-[100%] lg:h-[22px] lg:p-1 bg-[#C5C5CF] rounded-sm'>
                <img className='w-[10%]  mx-[2px] h-[10px] lg:w-[10%]  lg:h-[11px] lg:mr-[2px]' src={require('../images/calendar.png')} alt="" />
                <div className='w-[100%] flex text-[8px] font-[600] lg:w-[100%] lg:text-[9px]'>
                  <span>11 Apr</span>
                  <span> - </span>
                  <span>12 Apr, 2023</span>
                </div>
              </div>
            </div>
            <div className='w-[100%] flex mt-[18px] text-[0.5rem] lg:text-[0.55rem] font-[500] lg:mt-4 ml-[12px] lg:ml-0'>
              <div className='flex w-[30%] p-[2px] lg:p-none  h-[25px] lg:w-[30%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md'>
                <img className='w-[22%] h-[45%] lg:w-[19%] lg:mr-[5px]' src={require('../images/medal.png')} alt="" />
                <span><BsCurrencyRupee/></span><p>10,000</p>
              </div>
              <div className='flex mx-[5px] w-[40%] lg:w-[30%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md lg:mx-[12px]'>
                <img className=' w-[22%] h-[15px] lg:mr-[5px] mr-[4px]' src={require('../images/people.png')} alt="" />
                <p>80 joined</p>
              </div>
              <div className='flex w-[42%] h-[25px] lg:w-[38%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md'>
                <img className='lg:mr-[5px] mr-[2px]' src={require('../images/like_icon.png')} alt="" />
                <p>15 Interested</p>
              </div>
            </div>
          </article>
          <article className=' w-[40%]  lg:mb-4 flex flex-col justify-between lg:text-[0.8rem] lg:w-[40%]'>
            <div className='flex justify-end mt-[6px] mr-[8px] lg:mt-2 lg:mr-4'>
              <p className='text-[12px] font-[600] lg:text-[12px] mr-1 lg:mr-2'>Save</p>
              <img src={require('../images/bookmark.png')} alt="" />
            </div>
            <div className='flex flex-col items-center mb-[12px] lg:mb-0 justify-center lg:justify-center lg:items-center'>
              <div className='flex w-[85%] h-[32px] justify-center lg:h-[44px] flex-col items-center bg-[#C5C5CF] lg:p-1 rounded-md lg:px-2'>
                <img className='w-[12%] lg:w-[10%]' src={require('../images/people_2.png')} alt="" />
                <p className=' text-[0.56rem] lg:text-[10px]'>Team Size 2-4 members</p>
              </div>
              <button className=' my-1  text-[0.75rem] lg:my-2 lg:bg-[#C5C5CF] lg:w-[43%] lg:h-[29px] font-[600] lg:text-[10px] lg:p-1 rounded-md'>Details</button>
              <button className='text-[0.75rem]  w-[64%] h-[29px] lg:mb-2 lg:w-[43%] lg:h-[32px] bg-[#2B29AB] text-white font-[600] lg:text-[10px] lg:p-1 rounded-md'>Register</button>
            </div>
          </article>
        </section>
        <section className='lg:w-[95%] lg:h-[36vh] bg-white flex justify-between w-[95%] h-[26vh] mx-auto'>
          <article className='mt-2 flex flex-col w-[58%] lg:w-[58%]  lg:ml-[30px]'>
            <div className='flex w-full lg:flex lg:w-full lg:justify-start lg:mt-2'>
              <div className='lg:w-[44%] w-[35%] ml-1'>
                <img className='w-[100%] relative lg:right-2' src={require('../images/hackathon_image.png')} alt="" />
              </div>
              <div className='w-[65%] flex items-end ml-2 lg:h-[8vh] lg:w-[65%] lg:ml-4'>
                <div className='flex w-[85%] lg:w-[85%]'>
                  <img className='lg:w-[30%] w-[25%] h-[20px]' src={require('../images/web.png')} alt="" />
                  <p className='text-[0.75rem] mt-1 lg:text-[0.8rem] font-[400] lg:mt-[2px]'>Online</p>
                </div>
                <div className='flex ml-[14px] w-[85%] lg:justify-start lg:w-[85%] lg:ml-4 relative lg:top-[0px]'>
                  <img className='w-[22%] h-[16px] lg:w-[22%] lg:h-[10%] lg:mt-[6px]' src={require('../images/wallet_money.png')} alt="" />
                  <p className='text-[0.75rem] ml-[2px] lg:text-[0.8rem] lg:mt-1 lg:ml-[4px] lg:font-[600]'>Free</p>
                </div>
              </div>
            </div>
            <div className='w-[100%] flex flex-col lg:w-[100%] lg:mt-2 ml-[12px] lg:ml-0 mt-2'>
              <h2 className=' text-[18px] font-[700] lg:text-[20px]'>Hack-T-Gor</h2>
              <p className='w-full text-[11px] lg:text-[11px] font-[400]'>Galgotias University , Greater Noida</p>
            </div>
            <div className=' mt-1 ml-[12px]  lg:ml-0 flex w-[100%] justify-center lg:text-[10px] lg:w-[88%] lg:mt-1'> 
              <div className='flex w-[50%] lg:w-[72%] lg:pr-1 lg:mr-3 lg:mt-[1px]'>
                <img className='w-[10%] relative top-[3px] mr-[2px] h-[10px] lg:w-[15%] lg:mr-[1px]  lg:h-[14px]' src={require('../images/location.png')} alt="" />
                <p className='w-[100%] text-[0.64rem] font-[800] lg:w-[100%] mt-[1px] lg:mt-[2px]'>Get location</p>
              </div>
              <div className='flex justify-center items-center relative right-[11px]  w-[55%] px-1 h-[18px] lg:w-[100%] lg:h-[22px] lg:p-1 bg-[#C5C5CF] rounded-sm'>
                <img className='w-[10%]  mx-[2px] h-[10px] lg:w-[10%]  lg:h-[11px] lg:mr-[2px]' src={require('../images/calendar.png')} alt="" />
                <div className='w-[100%] flex text-[8px] font-[600] lg:w-[100%] lg:text-[9px]'>
                  <span>11 Apr</span>
                  <span> - </span>
                  <span>12 Apr, 2023</span>
                </div>
              </div>
            </div>
            <div className='w-[100%] flex mt-[18px] text-[0.5rem] lg:text-[0.55rem] font-[500] lg:mt-4 ml-[12px] lg:ml-0'>
              <div className='flex w-[30%] p-[2px] lg:p-none  h-[25px] lg:w-[30%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md'>
                <img className='w-[22%] h-[45%] lg:w-[19%] lg:mr-[5px]' src={require('../images/medal.png')} alt="" />
                <span><BsCurrencyRupee/></span><p>10,000</p>
              </div>
              <div className='flex mx-[5px] w-[40%] lg:w-[30%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md lg:mx-[12px]'>
                <img className=' w-[22%] h-[15px] lg:mr-[5px] mr-[4px]' src={require('../images/people.png')} alt="" />
                <p>80 joined</p>
              </div>
              <div className='flex w-[42%] h-[25px] lg:w-[38%] lg:h-[25px] bg-[#C5C5CF] justify-center items-center rounded-md'>
                <img className='lg:mr-[5px] mr-[2px]' src={require('../images/like_icon.png')} alt="" />
                <p>15 Interested</p>
              </div>
            </div>
          </article>
          <article className=' w-[40%]  lg:mb-4 flex flex-col justify-between lg:text-[0.8rem] lg:w-[40%]'>
            <div className='flex justify-end mt-[6px] mr-[8px] lg:mt-2 lg:mr-4'>
              <p className='text-[12px] font-[600] lg:text-[12px] mr-1 lg:mr-2'>Save</p>
              <img src={require('../images/bookmark.png')} alt="" />
            </div>
            <div className='flex flex-col items-center mb-[12px] lg:mb-0 justify-center lg:justify-center lg:items-center'>
              <div className='flex w-[85%] h-[32px] justify-center lg:h-[44px] flex-col items-center bg-[#C5C5CF] lg:p-1 rounded-md lg:px-2'>
                <img className='w-[12%] lg:w-[10%]' src={require('../images/people_2.png')} alt="" />
                <p className=' text-[0.56rem] lg:text-[10px]'>Team Size 2-4 members</p>
              </div>
              <button className=' my-1  text-[0.75rem] lg:my-2 lg:bg-[#C5C5CF] lg:w-[43%] lg:h-[29px] font-[600] lg:text-[10px] lg:p-1 rounded-md'>Details</button>
              <button className='text-[0.75rem]  w-[64%] h-[29px] lg:mb-2 lg:w-[43%] lg:h-[32px] bg-[#2B29AB] text-white font-[600] lg:text-[10px] lg:p-1 rounded-md'>Register</button>
            </div>
          </article>
        </section>
        <ChatBox/>
      </div>
    </>
  )
}

export default Hackathon