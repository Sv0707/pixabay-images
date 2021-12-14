import axios from 'axios';

const fetchImages = async (searchItem, currentPage) => {
  const URL = 'https://pixabay.com/api/';
  const KEY = '23791107-11d3cac259792c6d6696bfd74';
  const res = await axios
        .get(
            `${URL}?q=${searchItem}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return res.data;
};

export default fetchImages;