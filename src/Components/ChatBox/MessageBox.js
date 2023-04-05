import React,{ useState} from 'react'
// import { useParams } from 'react-router-dom'
import ScrollToBottom from "react-scroll-to-bottom";

const MessageBox = ({isInfo,messages}) => {
  // const [list,setList] = useState([
  //   {
  //     mssg: "hi",
  //     time:
  //     new Date(Date.now()).getHours() +
  //     ":" +
  //     new Date(Date.now()).getMinutes(),
  //   }
  // ])
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = () => {
    if (currentMessage !== "") {
      
      const messageData = {
        mssg: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      
      setMessageList([...messageList, messageData]);
      setCurrentMessage("");
    }
  };
  // useEffect(() => {
  // console.log(isInfo);
  // },[isInfo])
  // const chat = messages.find((message) => (message.id) === isInfo)
  // console.log(chat);
  // console.log(JSON.stringify(chat[0].title));
  return (
    <>
    {/* header section */}
      <article className='bg-white w-[100%] rounded-b-[15px] h-[8vh]' >
        <div className='flex justify-start pl-4 items-center h-[7vh]'>
          <h2 className='text-black font-[600] text-[22px]'>Name</h2>
        </div>
      </article> 
      <article className="box text-black w-[100%] relative  h-[50vh] overflow-y-auto">
        <ScrollToBottom className="message-container  w-[100%]">
          {messageList.map((messageContent) => {
            return (
              <div
                className="flex flex-col justify-end items-end w-full ml-1"
                // id={username === messageContent.author ? "you" : "other"}
              >
                <div className=' my-2 p-1 pr-4 flex flex-col justify-end items-end bg-white rounded-lg  break-words break-all px-1  min-w-fit '>
                  <div className="text-black bg-white">
                    <p>{messageContent.mssg}</p>
                  </div>
                  <div className="message-meta ml-4">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </article>

      {/* input section */}
      <article className='bg-white w-[95%] mx-auto rounded-md h-[7vh]'>
        <form onSubmit={(e) => e.preventDefault() } className='w-full' action="">
          <input value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} className='text-[20px] p-2 w-[95%] mx-auto outline-none pr-[52px]' type="text" placeholder='Enter message' />
          <button onClick={() => sendMessage()} className='absolute right-[30px] bottom-[58px]'>Send</button>
        </form>
      </article>
    </>
  )
}

export default MessageBox