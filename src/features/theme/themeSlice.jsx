import { createSlice } from '@reduxjs/toolkit'

const getTheme = () => {
	const theme = `${window?.localStorage?.getItem('theme')}`

	if (['light', 'dark'].includes(theme)) return theme

	const userMedia = window.matchMedia('(prefers-color-scheme: light)')

	if (userMedia.matches) return 'light'

	return 'dark'
}

const initialState = {
	value: getTheme(),
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: state => {
			state.value === 'light' ? (state.value = 'dark') : (state.value = 'light')
		},
	},
})
export const selectTheme = state => state.theme.value

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
