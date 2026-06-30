import { useQuery } from '@tanstack/react-query';
import { movieService } from '@/services/movieService';

export const useNowPlayingMovies = () =>
  useQuery({
    queryKey: ['nowPlaying'],
    queryFn: movieService.getNowPlayingMovies,
  });
