import React from 'react'
import { Link } from 'react-router-dom'

const AboutHomeSection = () => {
  return (
    <>
      {/* <!-- SECCIÓN 2 (ABOUT ME)
      =============================== --> */}
      <div className="sect-2" id="about">
        <div className="container">
          <h2>Hi! 👋</h2>
          <h2>I'm <span className="nameSpan">José Hidalgo</span>
            Frontend developer focused on building beautiful interfaces and
            experiences.</h2>
          <div className="bt">
            <Link to='/about' className="btn" ><span></span>Más de mi</Link>
          </div>
        </div>
      </div> 
    </>
  )
}

export default AboutHomeSection
