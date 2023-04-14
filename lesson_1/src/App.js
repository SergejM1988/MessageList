import React, { useEffect } from "react"
import { useState } from "react"
import styles from './App.module.css'
import uuid from 'react-uuid'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



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
      console.log(authorList)
      setMessageList('')
      setAuthorList('')
    }
    useEffect(() => {
      if (authorList[authorList.length-1] !== 'BOT' || authorList === '') {
        console.log(showMessage[showMessage.length-1])
        const timeout = setTimeout(() => {
          setShowMessage([...showMessage, {message: 'Hello', author:'BOT'}]) 
        }, 1500)
          
        return () => {
          clearTimeout(timeout)
        }
      }
    }, [authorList])

    return(
     <>
        <form onSubmit={handleSubmit} className = { styles.messageInput }>
         <TextField id="outlined-basic" variant="outlined" placeholder="message"  type="text" value={messageList} onChange={e => setMessageList(e.target.value)}/>
         <TextField id="standard-basic"  variant="standard" placeholder="author"  type="text" value={authorList} onChange={e => setAuthorList(e.target.value)}/>
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
