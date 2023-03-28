import axios from "axios";
let apiKey = '33268326-bb3a299852ac950b9c9a6ecaa';
let page = 1;

axios.defaults.baseURL = `https://pixabay.com/api/?q=${searchQuery.value}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

const fetchImagesWithQuery = async (searchQuery) => {
    const response = await axios.get(`/search?query=${searchQuery}`);
    return response.data.hits;
}

export default { fetchImagesWithQuery };