const TMDB_API = 'https://api.themoviedb.org/3'
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

export const fetchRecommendedMovies = async () => {
  const res = await fetch(`${TMDB_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
  const data = await res.json()
  return data.results
}
