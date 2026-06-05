import { create } from 'zustand';

interface MovieStore {
  activePage: 'home' | 'movie-detail' | 'favorites' | 'search';
  activeMovieId: string | null;
  isViewFromNavbarFavorite: boolean;
  searchQuery: string;
  setActivePage: (page: 'home' | 'movie-detail' | 'favorites' | 'search') => void;
  setActiveMovieId: (id: string | null) => void;
  setIsViewFromNavbarFavorite: (value: boolean) => void;
  setSearchQuery: (query: string) => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
  activePage: 'home',
  activeMovieId: null,
  isViewFromNavbarFavorite: false,
  searchQuery: '',

  setActivePage: (page) => set({ activePage: page }),
  setActiveMovieId: (id) => set({ activeMovieId: id }),
  setIsViewFromNavbarFavorite: (value) => set({ isViewFromNavbarFavorite: value }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
