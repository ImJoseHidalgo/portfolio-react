import React, { useEffect } from 'react';
import { topObserver } from '../../../utils/intersectionObserver';

const Blog = () => {

  window.scrollTo(0, 0);
  useEffect(() => {
    topObserver();
    document.title = 'Blog | José Hidalgo | Frontend Developer';
  }, [])

  return (
    <main className='main'>
      <div id='top' className='blog-demo'>
        <h1>Este es el Blog</h1>
      </div>
      <div className='blog-demo'>
        <h1>Este es el Blog</h1>
      </div>
    </main>
  )
}

export default Blog;
