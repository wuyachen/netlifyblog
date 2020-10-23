import React,{useState, useEffect} from 'react';
import './App.css';
import Message from './Message.js';
import {FormControl, Input} from '@material-ui/core'
import db from './firebase';
import firebase from 'firebase';
import Flipmove from 'react-flip-move';
import {IconButton} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input,setInput] = useState('');
  const [messages, setMessages] = useState([])
  const [username,setUsername] = useState('');

  useEffect(() => {
    db.collection(`messages`)
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  },[])
  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, [] )


  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }


  return (
    <div className="App">
    <img src="https://seeklogo.com/images/W/wechat-logo-C88C575BE0-seeklogo.com.png" />
      <h1>你好!</h1>
      <h2> 欢迎 {username}</h2>
      <form className = "app__form">
      <FormControl className="app__formControl">
  <Input className = "app__input" placeholder = 'Enter a message...' 
  value = {input} 
  onChange = {event => setInput(event.target.value)}/>

  <IconButton className ="app__icon" disabled = {!input} 
      variant = "contained" 
      color="primary" 
      type='submit' 
      onClick = {sendMessage}>
      <SendIcon />
      </IconButton>
</FormControl>
      </form> 
    <Flipmove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username = {username} message={message}/>
        ))
      }
      </Flipmove>
    </div>
  );
}

export default App;
