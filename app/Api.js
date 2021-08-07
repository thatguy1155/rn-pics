import axios from 'axios';

export const fetchItems = async () => {
  try {
    const {data} = await axios.get('http://localhost:3000/member/1/photos');
    return data;
  } catch (error) {
    console.error(error);
  }
};
