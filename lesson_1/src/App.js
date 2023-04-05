import React, { useEffect } from "react"
import { useState } from "react"
import styles from './App.module.css'
import uuid from 'react-uuid'
import Button from '@mui/material/Button';


function App () {
    const [messageList, setMessageList] = useState('');
    const [authorList, setAuthorList] = useState('');
    const [showMessage, setShowMessage] = useState([]);
    let message = {
      message:'',
      author : ''
    };

    const handleSubmit = (e) => {
      e.preventDefault();
       message = {
        message: messageList,
        author: authorList}
      setShowMessage([...showMessage, message]) 
      setMessageList('')
      setAuthorList('')
    }
    useEffect(() => {
      if (showMessage[showMessage.length-1].author !== 'BOT') {
        console.log(showMessage[showMessage.length-1])
        const timeout = setTimeout(() => {
          setShowMessage([...showMessage, {message: 'Hello', author:'BOT'}]) 
        }, 1500)
        
        return () => {
          clearTimeout(timeout)
        }
      }
    }, [showMessage])

    return(
     <>
        <form onSubmit={handleSubmit} className = { styles.messageInput }>
         <input placeholder="message"  type="text" value={messageList} onChange={e => setMessageList(e.target.value)}/>
         <input placeholder="author"  type="text" value={authorList} onChange={e => setAuthorList(e.target.value)}/>
         <Button type="submit" variant="contained">Add message</Button>
        </form>
        <ul>
         {showMessage.map ((item) => (
           <li key={uuid()}>message: {item.message} author: {item.author}</li>
         ))}
        </ul>  
     </>
    )
}
export default App
