import { Link } from 'react-router-dom'
import app from '../assets/Music.png'
import './appPage.css'
export default function AppPage() {
	return (
		<>
			<div className='appPage'>
				<div className='Header'>
					<img src={app} alt='app' width='50px' />
					<span>Приложения</span>

					<div className='Links'>
						<Link to='/' id='blink'>
							Главная / Home
						</Link>
					</div>
				</div>

				<div className='appContent'>
					<p>App</p>
				</div>
			</div>
		</>
	)
}
