import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { setCategories } from '@/store/preferencesSlice'
import { useState } from 'react'

const categoryOptions = ['technology', 'sports', 'finance', 'movies', 'health']

const SettingsPanel = () => {
  const selected = useSelector((state: RootState) => state.preferences.categories)
  const dispatch = useDispatch()

  const [localSelection, setLocalSelection] = useState<string[]>(selected)

  const toggleCategory = (category: string) => {
    if (localSelection.includes(category)) {
      setLocalSelection(localSelection.filter(c => c !== category))
    } else {
      setLocalSelection([...localSelection, category])
    }
  }

  const savePreferences = () => {
    dispatch(setCategories(localSelection))
  }

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Select Your Content Categories</h2>
      <div className="flex flex-wrap gap-3">
        {categoryOptions.map(category => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`px-4 py-2 rounded-md border transition ${
              localSelection.includes(category)
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-gray-100 dark:bg-gray-700 border-gray-300 text-gray-700 dark:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <button
        onClick={savePreferences}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
      >
        Save Preferences
      </button>
    </div>
  )
}

export default SettingsPanel
