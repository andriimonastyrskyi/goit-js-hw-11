import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '33742553-8bb04a1a84c196e6fa85b3bbd';

export async function fetchPhotos(search, currentPage) {
  const response = await axios.get(
    `${URL}?key=${KEY}&q=${search}&image_type=photo&safesearch=true&orientation=horizontal&per_page=40&page=${currentPage}`
  );
  return response.data;
  //   console.log();
}
