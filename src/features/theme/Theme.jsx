import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Theme.css'
import { selectTheme, toggleTheme } from './themeSlice'

export default function Theme() {
	const theme = useSelector(selectTheme)
	const dispatch = useDispatch()

	useEffect(() => {
		document.querySelector('html').dataset.theme = theme
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<div className='header__theme'>
			<h6>Redux</h6>
			<label className='toggle'>
				<input
					type='checkbox'
					name='checkbox'
					className='switch'
					onClick={() => dispatch(toggleTheme())}
					defaultChecked={theme === 'light' ? true : false}
				/>
				<span className='slider round'></span>
			</label>
		</div>
	)
}
