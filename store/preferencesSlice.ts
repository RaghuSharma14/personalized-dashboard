import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PreferencesState = {
  categories: string[]
  favorites: string[]
}

const initialState: PreferencesState = {
  categories: ['technology', 'sports'], // default
  favorites: [],
}

export const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload
    },
    addFavorite: (state, action: PayloadAction<string>) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload)
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(id => id !== action.payload)
    },
  },
})

export const { setCategories, addFavorite, removeFavorite } = preferencesSlice.actions

export default preferencesSlice.reducer
