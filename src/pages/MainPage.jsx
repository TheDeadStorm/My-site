import { Link } from 'react-router-dom'
import main from '../assets/Dom.png'
import './mainPage.css'
export default function MainPage() {
	return (
		<>
			<div className='mainPage'>
				<div className='Header'>
					<img src={main} alt='main' width='50px' height='50px' />
					<span>Главная страница</span>
					<div className='Links'>
						<Link to='app' id='blink'>
							Приложения \ Apps
						</Link>
						<br />
						<Link to='game' id='blink'>
							Игры \ Games
						</Link>
					</div>
				</div>

				<div className='mainContent'>
					<div className='card'>
						<p>Обо мне / About me</p>
						<p>Меня зовут Макс и мне 24 года.</p>
						<p>My name is Max and I am 24 years old</p>
					</div>
					<div className='card'>
						<p>Почему я? / Why me?</p>
						<p>
							Я молодой и перспективный парень, люблю изучать что-то новое и
							поломать голову в головоломках и поэтому пришел к
							программированию.
						</p>
						<p style={{ fontSize: '20px' }}>
							I am a young and promising guy, I like to learn something new and
							break my head in puzzles, and that&#39;s why I came to
							programming.
						</p>
					</div>
					<div className='card'>
						<p>Стэк / Stack</p>
						<p>HTML CSS JS React ReactRouter Sass MySQL</p>
					</div>
				</div>
			</div>
		</>
	)
}
