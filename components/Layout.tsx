import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchTerm(searchInput.trim())
  }

  return (
    <div className="flex h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-6 shadow-md hidden md:flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <a href="#" className="hover:text-blue-500">Feed</a>
          <a href="#" className="hover:text-blue-500">Trending</a>
          <a href="#" className="hover:text-blue-500">Favorites</a>
          <a href="#" className="hover:text-blue-500">Settings</a>
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 p-4 shadow-md flex justify-between items-center">
          <form
            onSubmit={handleSearchSubmit}
            className="flex w-full max-w-md items-center gap-2"
          >
            <input
              type="text"
              placeholder="Search news..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Search
            </button>
          </form>

          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-4 px-3 py-2 bg-gray-300 dark:bg-gray-700 rounded-md"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          )}
        </header>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(
                  child as React.ReactElement<{ searchTerm: string }>,
                  { searchTerm }
                )
              : child
          )}
        </main>
      </div>
    </div>
  )
}

export default Layout







// import React, { useEffect, useState } from 'react'
// import { useTheme } from 'next-themes'

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   const { theme, setTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)
//   const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   return (
//     <div className="flex h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white overflow-hidden">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white dark:bg-gray-800 p-6 shadow-md hidden md:flex flex-col gap-6">
//         <h2 className="text-2xl font-bold">Dashboard</h2>
//         <nav className="flex flex-col gap-4">
//           <a href="#" className="hover:text-blue-500">Feed</a>
//           <a href="#" className="hover:text-blue-500">Trending</a>
//           <a href="#" className="hover:text-blue-500">Favorites</a>
//           <a href="#" className="hover:text-blue-500">Settings</a>
//         </nav>
//       </aside>

//       {/* Main Area */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <header className="bg-white dark:bg-gray-800 p-4 shadow-md flex justify-between items-center">
//           <input
//             type="text"
//             placeholder="Search news..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full max-w-md px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white outline-none"
//           />
//           {mounted && (
//             <button
//               onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//               className="ml-4 px-3 py-2 bg-gray-300 dark:bg-gray-700 rounded-md"
//             >
//               {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
//             </button>
//           )}
//         </header>

//         {/* Main content */}
//         <main className="flex-1 p-6 overflow-y-auto">

//           {React.Children.map(children, (child) =>
//              React.isValidElement(child)
//              ? React.cloneElement(child as React.ReactElement<{ searchTerm: string }>, { searchTerm })
//              : child
//           )}


//         </main>
//       </div>
//     </div>
//   )
// }

// export default Layout



