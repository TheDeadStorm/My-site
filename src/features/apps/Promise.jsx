import axios from 'axios'
import { useEffect, useState } from 'react'
import './Promise.css'

export default function Promises() {
	const [url, setUrl] = useState('')
	const [error, setError] = useState(false)
	const [state, setState] = useState('')
	useEffect(() => {
		setState('loading')
		axios
			.get('https://cataas.com/cat?json=true')
			.then(() => {
				setState('success')
				setUrl('https://cataas.com/cat?width=500&height=600')
			})
			.catch(error => {
				console.log(error)
				setState('error')
				setError(error)
			})
	}, [])
	if (state === error) return <h1>{error.toString()}</h1>
	return (
		<div className='promise'>
			{state === 'loading' ? (
				<h1>Loading...</h1>
			) : (
				<img src={url} alt='Something happen...' width='100%' height='' />
			)}
		</div>
	)
}
