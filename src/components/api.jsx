const itemsPerPage = 12;
const baseUrl = 'https://pixabay.com/api/';
const apiKey = '38292476-2e9a08398af0b2923a0e3887f';

export default function fetchPhotos(q, page) {
  let url = `${baseUrl}?key=38292476-2e9a08398af0b2923a0e3887f&q=${q}&page=${page}&per_page=${itemsPerPage}&client_id=${apiKey}`;
  console.log(url);
  return fetch(url);
}
