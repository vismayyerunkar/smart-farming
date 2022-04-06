import React from 'react'
import '../../styles/SideBar.css'
import {Link} from 'react-router-dom'
import ParkIcon from '@mui/icons-material/Park';
import HomeIcon from '@mui/icons-material/Home';

function SideBar() {
  return (
    <div className='sidebar'>
        <div className="options-bar">
        <Link className="router-link" to="home">
          <HomeIcon className="icon"/>
        </Link>
        <Link className="router-link" to="plants-info">
          <ParkIcon className="icon"/>
        </Link>
            
            
        </div>
    </div>
  )
}

export default SideBar