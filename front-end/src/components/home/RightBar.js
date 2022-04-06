import React from 'react'
import '../../styles/RightBar.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function RightBar() {
  return (
    <div className='rightbar'>
        {/* <div className='rightbar-top'>
            <span>Suggested plant</span>
            <h4>Demo Plant</h4>
            <img alt="img" src="https://cutt.ly/HSveTGK"/>
        </div>
        <div className='rightbar-bottom'>
          <div className='plant-essen'>
            <div className='essn' style={{ width: 60, height: 60,fontWeight:'bold' }}>
                <CircularProgressbar value={9} text={`${99}%`} />
                <span>Fats</span>
            </div>
            <div className='essn' style={{ width: 60, height: 60,fontWeight:'bold' }}>
                <CircularProgressbar value={9} text={`${99}%`} />
                <span>Proteins</span>
            </div>
            <div className='essn' style={{ width: 60, height: 60,fontWeight:'bold' }}>
                <CircularProgressbar value={9} text={`${99}%`} />
                <span>Carbs</span>
            </div>
          </div>
          <div className='plant-info'>
              <h3>Wheat</h3>
              <span>
                hh
              </span>
          </div>
          <div className='bottom-bar'>
              <span>{"<"}</span>
                <h5>Plant !</h5>
              <span>{">"}</span>
          </div>
        </div> */}
    </div>
  )
}

export default RightBar