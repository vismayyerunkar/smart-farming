import React from 'react'
import '../../styles/Home.css'
import RightBar from './RightBar'
import SideBar from './SideBar'
import Main from './Main'


function Home() {

    React.useEffect(()=>{
    const token = JSON.parse(localStorage.getItem('token'));
    if(!token){
       window.location.pathname = "/"
    }
  });

  return (
    <div className='home-page'>
        <SideBar/>
        <Main/>
        <RightBar/>
    </div>
  )
}

export default Home
