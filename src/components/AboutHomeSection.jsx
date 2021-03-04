import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AboutHomeSection = () => {
  const { pageContent } = useSelector(state => state.lang)
  
  return (
    <>
      {/* <!-- SECCIÓN 2 (ABOUT ME)
      =============================== --> */}
      <div className="sect-2" id="about">
        <div className="container">
          <h2>{pageContent.homeAbout.tit}</h2>
          <h2>{pageContent.homeAbout.desc}</h2>
          <div className="bt">
            <Link to='/about' className="btn" ><span></span>{pageContent.homeAbout.butt}</Link>
          </div>
        </div>
      </div> 
    </>
  )
}

export default AboutHomeSection
