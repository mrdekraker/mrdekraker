import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'c8fatw9j',
    dataset: 'production',
    useCdn: false,
    apiVersion: "2023-10-15"
});

export default client;