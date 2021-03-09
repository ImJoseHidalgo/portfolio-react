import { types } from "../types/types";
import sanityClient from '../sanity/client.js';

export const startLoadingPosts = () => {
  return async (dispatch) => {
    try {
      const response = await sanityClient
          .fetch(
            `*[_type == "post"]{
                title,
                slug,
                mainImage{
                  asset->{
                    _id,
                    url
                  }
                },
                publishedAt,
                body,
              }`
          );
      dispatch(loadPosts(response));
    } catch (error) {
      console.log(error);
    }
  }
}

export const loadPosts = (posts) => {
  return {
    type: types.posts,
    payload: posts
  }
}