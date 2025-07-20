import { useEffect, useState } from 'react'
import { fetchRecommendedMovies } from '@/utils/fetchTMDB'

type Movie = {
  id: number
  title: string
  poster_path: string
  overview: string
  vote_average: number
}

const Recommendations = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const load = async () => {
      const res = await fetchRecommendedMovies()
      setMovies(res)
    }
    load()
  }, [])

  return (
    <div className="mt-10 space-y-6">
      <h2 className="text-2xl font-bold">🎬 Recommended Movies</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white dark:bg-gray-800 rounded-md shadow-md overflow-hidden"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p className="text-sm text-gray-500">⭐ {movie.vote_average}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                {movie.overview.slice(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recommendations
