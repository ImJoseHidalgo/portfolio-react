import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import { topObserver } from '../../../utils/intersectionObserver';
import sanityClient from '../../../sanity/client.js';
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const PostScreen = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();
  
  window.scrollTo(0, 0);
  useEffect(() => {
    // topObserver();
    document.title = 'Blog | José Hidalgo';
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            body,
            "name": author->name,
            "authorImage": author->image
          }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  console.log(postData);

  return (
    <>
      <h1>{postData.title}</h1>
      <div>
        <img src={urlFor(postData.authorImage).width(100).url()} alt="Autor Jose Hidalgo"/>
        <h4>{postData.name}</h4>
      </div>
      <img src={urlFor(postData.mainImage).width(200).url()} alt="image post"/>
      <BlockContent
        blocks={postData.body}
        projectId={sanityClient.clientConfig.projectId}
        dataset={sanityClient.clientConfig.dataset}
      />
    </>
  )
}

export default PostScreen
