import { createClient } from "@sanity/client";

const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET,
    useCdn: process.env.REACT_APP_SANITY_USE_CDN === "true", // Convert to boolean
    apiVersion: process.env.REACT_APP_SANITY_API_VERSION,
});

export default client;
