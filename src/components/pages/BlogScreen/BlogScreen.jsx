import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../../sanity/client.js';
import { topObserver } from '../../../utils/intersectionObserver';

const Blog = () => {
  const [allPostsData, setAllPosts] = useState(null);

  window.scrollTo(0, 0);
  useEffect(() => {
    topObserver();
    document.title = 'Blog | José Hidalgo';
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            }
          }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  console.log(allPostsData);

  return (
    <>
      <div id='top'>
        <h1>My Posts</h1>
        <h3>Welcome to my blog posts page!</h3>
        <div>
          {allPostsData &&
            allPostsData.map((post, i) => (
              <Link to={'/blog/' + post.slug.current} key={post.slug.current}>
                <>
                  <img src={post.mainImage.asset.url} alt="image blog"/>
                  <h2>{post.title}</h2>
                </>
              </Link>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Blog;
