import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { topObserver } from '../../../utils/intersectionObserver';
import sanityClient from '../../../sanity/client.js';
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { Container, Section1, Title } from './PostScreen.styles';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingPosts } from '../../../actions/posts.js';
import LoadingUI from '../../ui/Loading/Loading.jsx';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const PostScreen = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { posts } = useSelector(state => state.posts);

  const dateOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  };

  window.scrollTo(0, 0);
  useEffect(() => {
    topObserver();
    document.title = `${slug.charAt(0).toUpperCase() + slug.slice(1)} | José Hidalgo`;
    {posts.length === 0 && dispatch(startLoadingPosts())}
  }, [])

  const postData = posts.filter(post => post.slug.current?.includes(`${slug}`));

  if (!postData[0]) return <LoadingUI />;

  return (
    <>
      <Section1>
        <Title id="top" className='container'>
          <div>
            <img src={urlFor(postData[0].mainImage).width(1000).url()} alt="post"/>
            <span>Category</span>
          </div>
        </Title>
        <Container container>
          <h5>{new Date(postData[0].publishedAt).toLocaleDateString('es-ES', dateOptions)}</h5>
          <BlockContent
            blocks={postData[0].body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </Container>
      </Section1>
    </>
  )
}

export default PostScreen
