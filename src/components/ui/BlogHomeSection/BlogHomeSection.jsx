import React from 'react'
import { Link } from 'react-router-dom'

const BlogHomeSection = () => {
  return (
    <>
      {/* <!-- SECCIÓN 3 (BLOG)
      =============================== --> */}
      <Link to='/blog' >
        <div className="blog-section">
          <div className="container">
            <h2>Mi Blog</h2>
            <h2>HTML CSS AND JAVASCRIPT</h2>
          </div>
        </div>
      </Link> 
    </>
  )
}

export default BlogHomeSection
