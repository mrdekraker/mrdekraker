import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: 'c8fatw9j',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-09-23',
});