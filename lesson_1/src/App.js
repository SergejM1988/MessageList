import React, { useEffect } from "react"
import { useState } from "react"
import { useRef } from "react"
import styles from './App.module.css'
import uuid from 'react-uuid'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ChatList from "./components/ChatList"



function App () {
    const [messageList, setMessageList] = useState('');
    const [authorList, setAuthorList] = useState('');
    const [showMessage, setShowMessage] = useState([]);
    let message = {
      message:'',
      author : ''
    };
    const inputRef = useRef(null)
    

    const handleSubmit = (e) => {
      e.preventDefault();
       message = {
        message: messageList,
        author: authorList}
      setShowMessage([...showMessage, message]) 
      setMessageList('')
      setAuthorList('')
      inputRef.current.focus();
    }
    useEffect(() => {
      if (authorList[authorList.length-1] !== 'BOT') {
        const timeout = setTimeout(() => {
          setShowMessage([...showMessage, {message: 'Input your message', author:'BOT'}]) 
        }, 1500)
        
          
        return () => {
          clearTimeout(timeout)
        }
      }
    }, [authorList])

    return(
     <>
     <div className = { styles.chatWindow }>
        <div className = { styles.form }>
        <form onSubmit={handleSubmit} className = { styles.messageInput }>
         <TextField ref = {inputRef} id="outlined-basic" variant="outlined" placeholder="message"  type="text" value={messageList} onChange={e => setMessageList(e.target.value)}/>
         <TextField id="standard-basic"  variant="standard" placeholder="author"  type="text" value={authorList} onChange={e => setAuthorList(e.target.value)}/>
         <Button type="submit" variant="contained">Add message</Button>
        </form>
        <ul>
         {showMessage.map ((item) => (
           <li key={uuid()}>MESSAGE: {item.message} AUTHOR: {item.author}</li>
         ))}
        </ul> 
        </div>
        <ChatList /> 
        </div>
     </>
    )
}
export default App
