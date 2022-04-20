import sanityClient from "@sanity/client";

const { SANITY_ID, SANITY_DATASET } = process.env;

export default sanityClient({
  // projectId: 'np735t1f',
  // dataset: 'production'
  projectId: SANITY_ID,
  dataset: SANITY_DATASET,
})