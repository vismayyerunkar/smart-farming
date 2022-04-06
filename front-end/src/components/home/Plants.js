import React from 'react'
import '../../styles/Plants.css'
import SideBar from './SideBar'

import {data} from '../home/data'

function Plants() {

    React.useEffect(()=>{
    const token = JSON.parse(localStorage.getItem('token'));
    if(!token){
       window.location.pathname = "/"
    }
  });

  const [crop,setCrop] = React.useState(data.summer[0]);

  const [ctr,seCtr] = React.useState(1);

  const next = () =>{
    //   console.log(Object.keys(data.summer)[ctr]);
      console.log(data.summer[ctr])
      seCtr((ctr + 1)%5);
      setCrop(data.summer[ctr]);
  }

  const prev = () =>{
      if(ctr  === 0) return;
    //   return (ctr - 1)%5;
          console.log(Object.keys(data.summer)[ctr]);


      seCtr((ctr - 1)%5);
          setCrop(data.summer[ctr]);
  }


    console.log(crop)


  return (
    <div className="home-page">
        <SideBar/>
        <div className='plants-page'>

            <div className="season-name">
                <h3>Suggested for Current Season</h3>
            </div>
            <div className="plant-header-container">
                {/* <span onClick={()=>prev()}>{"<"}</span> */}
                    <h5>{crop.crop}</h5>
                <span onClick={()=>next()}>{">"}</span>
            </div>
            <div className="plant-container">
                <div className="left-container">
                    <img src={crop.image}/>
                </div>
                <div className="right-container">
                    <div className="container-header">
                        <h2>{crop.crop}</h2>
                    </div>
                    <div className="container-info">
                        <p>
                        {crop.content}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Plants;
