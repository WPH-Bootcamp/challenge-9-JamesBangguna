import { api } from '@/lib/axios';

export const movieService = {
  getPopularMovies: async () => {
    const { data } = await api.get('/movie/popular');

    return data;
  },

  getNowPlayingMovies: async () => {
    const { data } = await api.get('/movie/now_playing');

    return data;
  },

  getMovieDetail: async (movieId: string) => {
    const { data } = await api.get(`/movie/${movieId}`);

    return data;
  },

  getMovieCredits: async (movieId: string) => {
    const { data } = await api.get(`/movie/${movieId}/credits`);

    return data;
  },

  getMovieVideos: async (movieId: string) => {
    const { data } = await api.get(`/movie/${movieId}/videos`);

    return data;
  },

  getSimilarMovies: async (movieId: string) => {
    const { data } = await api.get(`/movie/${movieId}/similar`);

    return data;
  },

  searchMovies: async (query: string) => {
    const { data } = await api.get('/search/movie', {
      params: { query },
    });

    return data;
  },
};
