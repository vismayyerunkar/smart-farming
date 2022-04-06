import React from 'react'
import "../../styles/Landing.css"
import {Link} from "react-router-dom"

function Landing() {
  return (
    <div className='landing-page'>
      <div className='landing-info-container'>
        <div className="landing-info">
          <h5>Improve your crops with</h5>
          <h2>Smart Farming</h2>
          <p>Organic agriculture considers the medium and long-term effect of agricultural interventions on the agro-ecosystem</p>
          <Link className='router-link' to="/auth">
          <div className='get-started-btn'>
              <span>Get Started</span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing;
