import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import AppPage from './pages/AppPage'
import GamePage from './pages/GamePage'
import MainPage from './pages/MainPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		errorElement: 'Go back exile',
	},
	{
		path: 'game',
		element: <GamePage />,
	},
	{
		path: 'app',
		element: <AppPage />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
