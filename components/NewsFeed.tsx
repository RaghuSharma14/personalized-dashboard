import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { useEffect, useState } from 'react'
import { fetchNewsByCategories } from '@/utils/fetchNews'
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd'

type Article = {
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
}

const NewsFeed = ({ searchTerm }: { searchTerm: string }) => {
  const categories = useSelector((state: RootState) => state.preferences.categories)
  const [articles, setArticles] = useState<Article[]>([])
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchTerm)
    }, 500)
    return () => clearTimeout(timeout)
  }, [searchTerm])

  useEffect(() => {
    const loadNews = async () => {
      const query = debouncedSearch.trim()
        ? [debouncedSearch]
        : categories
      const results = await fetchNewsByCategories(query)
      setArticles(results)
    }

    loadNews()
  }, [categories, debouncedSearch])

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return
    const reordered = Array.from(articles)
    const [moved] = reordered.splice(result.source.index, 1)
    reordered.splice(result.destination.index, 0, moved)
    setArticles(reordered)
  }

  return (
    <div className="mt-10 space-y-6">
      <h2 className="text-2xl font-bold">📰 Your Personalized News</h2>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="news-list">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-4"
            >
              {articles.map((article, index) => (
                <Draggable key={article.url} draggableId={article.url} index={index}>
                  {(provided) => (
                    <div
                      className="p-4 border rounded-md shadow-sm bg-white dark:bg-gray-800"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <h3 className="text-xl font-semibold">{article.title}</h3>
                      <p className="text-sm text-gray-500">{article.publishedAt.slice(0, 10)}</p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">{article.description}</p>
                      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 block">
                        Read more →
                      </a>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default NewsFeed








// import { useSelector } from 'react-redux'
// import { RootState } from '@/store'
// import { useEffect, useState } from 'react'
// import { fetchNewsByCategories } from '@/utils/fetchNews'
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult,
// } from '@hello-pangea/dnd'

// type Article = {
//   title: string
//   description: string
//   url: string
//   urlToImage: string
//   publishedAt: string
// }

// const NewsFeed = () => {
//   const categories = useSelector(
//     (state: RootState) => state.preferences.categories
//   )
//   const [articles, setArticles] = useState<Article[]>([])

//   useEffect(() => {
//     const loadNews = async () => {
//       const results = await fetchNewsByCategories(categories)
//       setArticles(results)
//     }

//     loadNews()
//   }, [categories])

//   const onDragEnd = (result: DropResult) => {
//     if (!result.destination) return
//     const reordered = Array.from(articles)
//     const [moved] = reordered.splice(result.source.index, 1)
//     reordered.splice(result.destination.index, 0, moved)
//     setArticles(reordered)
//   }

//   return (
//     <div className="mt-10 space-y-6">
//       <h2 className="text-2xl font-bold">📰 Your Personalized News</h2>

//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="news-list">
//           {(provided) => (
//             <div
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//               className="space-y-4"
//             >
//               {articles.map((article, index) => (
//                 <Draggable
//                   key={article.url}
//                   draggableId={article.url}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <div
//                       className="p-4 border rounded-md shadow-sm bg-white dark:bg-gray-800"
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <h3 className="text-xl font-semibold">{article.title}</h3>
//                       <p className="text-sm text-gray-500">
//                         {article.publishedAt.slice(0, 10)}
//                       </p>
//                       <p className="mt-2 text-gray-700 dark:text-gray-300">
//                         {article.description}
//                       </p>
//                       <a
//                         href={article.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 hover:underline mt-2 block"
//                       >
//                         Read more →
//                       </a>
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   )
// }

// export default NewsFeed
