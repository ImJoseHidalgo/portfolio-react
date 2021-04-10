import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../../sanity/client.js';
import { topObserver } from '../../../utils/intersectionObserver';
import imageUrlBuilder from "@sanity/image-url";
import { Post, PostsContainer, Section1, Title } from './BlogScreen.styles.js';
import Pagination from '../../ui/Pagination/Pagination.jsx';
import { startLoadingPosts } from "../../../actions/posts";
import { useDispatch, useSelector } from 'react-redux';
import LoadingUI from '../../ui/Loading/Loading.jsx';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Blog = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);
  const { title, desc, read } = useSelector(state => state.lang.pageContent.blog);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  window.scrollTo(0, 0);
  
  useEffect(() => {
    topObserver();
    document.title = 'Blog | José Hidalgo';
    {posts.length === 0 && dispatch(startLoadingPosts())}
  }, []);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);
  
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  if (posts.length === 0) return <LoadingUI />;

  return (
    <>
      <Section1>
        <Title id='top' className='container'>
          {/* <h1>{title}</h1> */}
          <h3>BLOG</h3>
        </Title>
        <PostsContainer className='container'>
          {currentPosts &&
            currentPosts.map((post, i) => (
              <Link to={'/blog/' + post.slug.current} key={post.slug.current}>
                <Post>
                  <img src={urlFor(post.mainImage.asset.url).width(400).url()} alt="blog"/>
                  <p>{post.categories.title}</p>
                  <h3>{post.title}</h3>
                  <p>{read}</p>
                </Post>
              </Link>
            ))
          }
        </PostsContainer>
      </Section1>
      <Pagination 
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        totalPosts={posts?.length}
        paginate={paginate}
      />
    </>
  )
}

export default Blog;
