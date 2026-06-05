import { useQuery } from '@tanstack/react-query';
import { movieService } from '@/services/movie.service';

export const useNowPlayingMovies = () =>
  useQuery({
    queryKey: ['nowPlaying'],
    queryFn: movieService.getNowPlayingMovies,
  });
