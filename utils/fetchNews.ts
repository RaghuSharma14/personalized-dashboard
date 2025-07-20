const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY

export const fetchNewsByCategories = async (categories: string[]) => {
  const query = categories.join(' OR ')
  const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&pageSize=10`)
  const data = await res.json()
  return data.articles
}
