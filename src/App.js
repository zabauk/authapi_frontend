import './App.css';
import Post from './components/posts'
import React, { useEffect } from 'react';
const axios=require('axios')

function App() {

  useEffect(() => {
    // Update the document title using the browser API
    axios.get('http://localhost:8000', {withCredentials: true}).then(res=>console.log(res)).catch(err=>console)
    console.log('abc')
  });

  return (
    <div>
      <h3>login</h3>
      <hr />
      <Post />
    </div>
  );
}

export default App;
