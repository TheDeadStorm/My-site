import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Future from '../src/pages/future/Future'
import { store } from './features/store/store'
import './index.css'
import Contacts from './pages/contacts/Contacts'
import Main from './pages/main/Main'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <Link to='/'>Back to home</Link>,
	},
	{
		path: 'contacts',
		element: <Contacts />,
	},
	{
		path: 'future',
		element: <Future />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
