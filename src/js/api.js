// import axios from 'axios';

// const URL = 'https://pixabay.com/api/';
// const KEY = '33742553-8bb04a1a84c196e6fa85b3bbd';

// export async function fetchPhotos(query, perPage) {
//   const response = await axios.get(
//     `${URL}?key=${KEY}&q=${search}&image_type=photo&safesearch=true&orientation=horizontal&per_page=40&page=${perPage}`
//   );
//   return response.data;

// }

import axios from 'axios';
export { fetchImages };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '33742553-8bb04a1a84c196e6fa85b3bbd';

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}
