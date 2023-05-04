import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { messageget, messagesend } from '../features/chatSlice'
import "../Pages/Chat.css"

const Chat = () => {
  useEffect(()=>{
    console.log(chatuser) 
dispatch(messageget())
  })
  const [messages,setmessage] = useState("")
  const dispatch = useDispatch()
  
const [chats,setchats] = useState()
const chatuser = useSelector((state)=>state.chat.id)
const chatsall  = useSelector((state)=>state.chat.chatgetsall)
const tokens = useSelector((state)=>state.auth.token)
// const messagesall = useSelector(state.chat.messages)

const messagehandle = (e)=>{
e.preventDefault()
const mes = {tokenUser:tokens,chatId:chatuser,content:messages}
dispatch(messagesend(mes))
console.log(mes)
}

  return (
    <div className='chat'>
        <div className='titlebar'>
       {/* { chatsall.filter((chatt) => (chatt._id === chatuser.
          chatt.users.map((nest)=> <div className="box1">
           <p>{nest.name }</p>
          </div>)
          
        ))} */}

{chatsall.filter((chatt)=>chatt._id === chatuser).map((nest)=><p>{nest.chatName}</p>)}

        </div>
<form onSubmit={messagehandle}>
<input className='messageinput' onChange={(e)=>setmessage(e.target.value)} />
    <button className='send' type='submit' >send</button>
</form>


    </div>
  )
}

export default Chat