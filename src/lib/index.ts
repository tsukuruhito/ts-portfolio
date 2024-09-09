import { createClient } from 'microcms-js-sdk';

if (!process.env.SERVICE_DOMAIN || !process.env.API_KEY) {
    throw new Error('Please set SERVICE_DOMAIN and API_KEY');
}

export const microcms = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
});
