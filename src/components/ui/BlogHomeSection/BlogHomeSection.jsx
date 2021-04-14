import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BlogSection } from './BlogHomeSection.styles';

const BlogHomeSection = () => {
  const { title, desc } = useSelector(state => state.lang.pageContent.homeblog);

  return (
    <>
      {/* <!-- SECCIÓN 3 (BLOG)
      =============================== --> */}
      <Link to='/blog' >
        <BlogSection className="blog-section">
          <div className="container">
            <h2>{title}</h2>
            <h2>{desc}</h2>
          </div>
        </BlogSection>
      </Link> 
    </>
  )
}

export default BlogHomeSection
