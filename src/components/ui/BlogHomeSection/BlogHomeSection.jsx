import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { BlogSection } from './BlogHomeSection.styles'

const BlogHomeSection = () => {
  const { desc, butt } = useSelector(state => state.lang.pageContent.homePort);
  
  return (
    <>
      {/* <!-- SECCIÓN 3 (BLOG)
      =============================== --> */}
      <Link to='/blog' >
        <BlogSection className="blog-section">
          <div className="container">
            <h2>Mi Blog</h2>
            <h2>HTML CSS AND JAVASCRIPT</h2>
          </div>
        </BlogSection>
      </Link> 
    </>
  )
}

export default BlogHomeSection
