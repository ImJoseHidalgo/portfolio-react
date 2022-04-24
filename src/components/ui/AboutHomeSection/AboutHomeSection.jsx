import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Section2 } from './AboutHomeSection.styles'

const AboutHomeSection = () => {
  const { pageContent } = useSelector(state => state.lang)
  
  return (
    <>
      {/* <!-- SECCIÓN 2 (ABOUT ME)
      =============================== --> */}
      <Section2 className="sect-2" id="about">
        <div className="container">
          <div className="h2-container">
            <h2>{pageContent.homeAbout.tit}</h2>
          </div>
          <div className="h2-container2">
            <h2>{pageContent.homeAbout.desc}</h2>
          </div>
          <div className="bt">
            <Link to='/about' className="btn" >
              {pageContent.homeAbout.butt}
              <img src="https://icongr.am/entypo/chevron-small-right.svg?size=128&color=ffffff" alt="arrow"/>
            </Link>
            {/* <ButtonAnim props='home' path='/about' text={pageContent.homeAbout.butt} /> */}
          </div>
        </div>
      </Section2> 
    </>
  )
}

export default AboutHomeSection
