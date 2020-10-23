import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
    
      <div className ="app__header">
      <img 
      className = "app__headerImage"
      src="https://img.icons8.com/cute-clipart/64/000000/instagram-new.png"
        alt=""
      />
      </div>
      
      <Post />
    </div>
  );
}

export default App;
