import axios from 'axios';

const BASE_URL = 'https://api.quotable.io';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((v) => v);
instance.interceptors.response.use((v) => v);

/**
 * @param {number} params.maxLength
 * @param {number} params.minLength
 * @param {string} params.tags
 * @param {string} params.author
 * @param {string} params.authorId
 * @param {string} params.sortBy
 * @param {string} params.order
 * @param {number} params.limit
 * @param {number} params.page
 */
export const QuotesList = ({ params }) => {
  return instance.get('/quotes', {
    params,
  });
};
