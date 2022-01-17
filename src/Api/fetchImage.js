import axios from "axios";

const fetchImage = async (page = 1) => {
  try {
    let { data } = await axios.get(
      `https://api.pexels.com/v1/curated?page=${page}&per_page=10`,
      {
        headers: {
          authorization: process.env.REACT_APP_API_KEY,
        },
      }
    );
    console.log(data);

    return { data };
  } catch (error) {
    return { error };
  }
};

export { fetchImage };
