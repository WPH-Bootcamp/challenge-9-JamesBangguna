export const getImageUrl = (path: string) => {
  return `${import.meta.env.VITE_TMDB_IMAGE_URL}${path}`;
};
