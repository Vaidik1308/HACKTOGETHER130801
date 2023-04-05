import React,{useEffect, useState} from 'react';
import {FaTimes} from 'react-icons/fa';
import MessageBox from './MessageBox';
// import { Link } from 'react-router-dom';




const ChatBox = () => {
    const [isChatBox,setIsChatBox] = useState(true);
    const [isConnect,setIsConnect] = useState(true);
    const [isMessage,setIsMessage] = useState(false);
    const [messageScreen,setMessageScreen] = useState(false);
    const [isInfo,setIsInfo] = useState('')
    const [connections,setConnections] = useState([
        {
            id:1,
            title:"Ayush",
            description:"HTML/CSS",
        },
        {
            id:2,
            title:"Vaibhav",
            description:"Embedded",
        },
        {
            id:3,
            title:"Aditya",
            description:"AIML",
        },
        {
            id:4,
            title:"Manish",
            description:"Node Js",
        },
        {
            id:5,
            title:"Aryan",
            description:"Backend",
        },
        {
            id:6,
            title:"Vaidik",
            description:"React Js",
        },
        {
            id:7,
            title:"Ashish",
            description:"Android",
        },
        {
            id:8,
            title:"Ankur",
            description:"web deve",
        },
    ])
    const [messages,setMessages] = useState([
        {
            id:1,
            title:"Ayush",
        },
        {
            id:2,
            title:"Vaibhav",
           
        },
        {
            id:3,
            title:"Aditya",
           
        },
        {
            id:4,
            title:"Manish",
            
        },
        {
            id:5,
            title:"Aryan",
            
        },
        {
            id:6,
            title:"Vaidik",
            
        },
        {
            id:7,
            title:"Ashish",
            
        },
        {
            id:8,
            title:"Ankur",
            
        },
    ])
    const message = () => {
        setIsMessage(true)
        setIsConnect(false)
        setMessageScreen(false)
    }
    const connection = () => {
        setIsConnect(true);
        setIsMessage(false);
        setMessageScreen(false)
    }
    const messageWindow = (id) => {
        // const info = messages.find((message) => message.id === id );
        // const newInfo = [info]
        setIsInfo(id)
        // console.log(info);
        // console.log(isInfo);
        
        // console.log(JSON.parse(JSON.stringify(isInfo[0].title)));
        setMessageScreen(true)
    }
    useEffect(() => {
        // console.log(isInfo);
    },[isInfo])
    
    
  return (
    <div style={isChatBox ? {translate:"-5px"}:  {translate:"540px"} }  className=' duration-500 bg-black chatbox  w-[90%] lg:w-[30%] absolute overflow-x-hidden overflow-y-hidden right-[18px] top-[140px] z-2 h-[78vh] rounded-md'>
        <div className='w-[100%] flex flex-col font-Inter bg-black'>
            <section className=' flex justify-between pt-2 pl-[20px] pr-[10px] h-[12vh] overflow-hidden bg-black text-white'>
                <div className='  w-[100%] text-[1.3rem] font-[500] flex justify-start items-end gap-1 relative top-[0px]'>
                    <button onClick={() => connection()} className={isConnect? 'bg-white duration-500 text-black w-[44%] py-1 rounded-t-md': 'w-[44%] py-1 rounded-t-md bg-black duration-500 text-white'} >Connections</button>
                    <button onClick={() => message()} className={isMessage? 'duration-500 bg-white text-black py-1 w-[44%] rounded-t-md ' :'bg-black duration-500 text-white py-1 w-[44%] rounded-t-md '}>Messages</button>
            
                </div>
                <FaTimes className='text-[32px]' onClick={() => setIsChatBox(false)} />
            </section>
            <section className={!messageScreen ? 'flex justify-center items-start w-[100%] h-[60vh] scrollbar' : 'hidden'}>
                <div className={isConnect ? " scrollbar pb-2 bg-white overflow-y-auto overflow-x-hidden flex-col gap-2 w-[91%] mx-auto h-min-[62vh] flex justify-start  items-center rounded-b-md " : "hidden"}>
                    {connections.map((connection) => (
                        <article id={connection.id} className=' w-[98%] mt-2 mx-auto rounded-md flex bg-black h-min-[12vh] overflow-hidden'>
                        <img className='rounded-[50%] w-[18%] h-[75px]' src={require('../../images/hackathon_image.png')} alt="" />
                        <div className='w-[80%] mt-2'>
                            <h3 className='text-white text-[1.1rem]'>{connection.title}</h3>
                            <p className='text-white text-[0.85rem]'>{connection.description}</p>
                        </div>
                    </article>
                    ))}
                </div>
                <div className={isMessage ? " pb-2 scrollbar bg-white overflow-y-auto overflow-x-hidden flex-col gap-2 w-[91%] mx-auto h-min-[62vh] flex justify-start  items-center rounded-b-md " : "hidden"}>
                   {messages.map((message) => (
                        <button className='w-[98%] justify-start' onClick={() => messageWindow(message.id)} ><article id={message.id} className=' w-[98%] mt-2 mx-auto rounded-md flex bg-black h-min-[12vh] overflow-hidden'>
                            <img className='rounded-[50%] w-[18%] h-[75px]' src={require('../../images/hackathon_image.png')} alt="" />
                            <div className='w-[20%] mt-2 justify-start'>
                                <h3 className='text-white text-[1.1rem]'>{message.title}</h3>
                            </div>
                        </article></button>
                        
                   ))}
                </div>
            </section>
            <section className={messageScreen  ? 'flex font-Inter flex-col justify-between items-center w-[100%] h-[60vh] scrollbar' : "hidden"}>
                <MessageBox messages={messages} isInfo={isInfo} />
            </section>
            
        </div>
    </div>
  )
}

export default ChatBox