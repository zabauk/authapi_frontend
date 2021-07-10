import './App.css';
import Post from './components/posts'
import React, {useEffect} from 'react'
import Cookies from 'universal-cookie'
const cookies=new Cookies()

function App() {
  //check login exist
  useEffect(()=>{
    if(!cookies.get("token")){
      window.location.href="http://localhost:3000/login"
    }
  })
  return (
    <div>
      <h3>login</h3>
      <hr />
      <Post />
    </div>
  );
}

export default App;
