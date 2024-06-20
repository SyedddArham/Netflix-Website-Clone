import axios from 'axios';

export const API_KEY = "7030b592fce59d5ad3b5ee4c1b981572";
export const TMBD_BASE_URL = "https://api.themoviedb.org/3";

export const searchMovies = async (query) => {
    try {
      const response = await axios.get(`${TMBD_BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error("Error fetching movies:", error);
      return [];
    }
  };
