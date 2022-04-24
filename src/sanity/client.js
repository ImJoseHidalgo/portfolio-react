import sanityClient from "@sanity/client";

const { REACT_APP_SANITY_ID, REACT_APP_SANITY_DATASET } = process.env;

export default sanityClient({
  projectId: REACT_APP_SANITY_ID,
  dataset: REACT_APP_SANITY_DATASET,
})