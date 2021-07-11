import './App.css';
import Post from './components/posts'
import React, {useEffect} from 'react'
import Cookies from 'universal-cookie'
import {Button} from 'react-bootstrap'
const cookies=new Cookies()

function App() {
  //check login exist
  useEffect(()=>{
    if(!cookies.get("token")){
      window.location.href="http://localhost:3000/login"
    }
  })

  //logout

  const logout=(evt)=>{
    try{
      cookies.remove("token")
      window.location.href="http://localhost:3000/login"
    }catch(err){
      console.log(err)
    }
    
  }

  return (
    <div>
      
      <div className="text-right p-3">
      <span className="mr-4">Hann Htay</span>
          <Button onClick={logout} variant="danger">Logout</Button>
      </div>
      <hr/>
      <Post />
    </div>
  );
}

export default App;
