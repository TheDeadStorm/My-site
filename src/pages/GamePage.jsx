import { Link } from 'react-router-dom'
import game from '../assets/Games.png'
import './gamePage.css'

export default function GamePage() {
	return (
		<>
			<div className='gamePage'>
				<div className='Header'>
					<img src={game} alt='game' width='50px' color='red' />
					<span>Игры</span>

					<div className='Links'>
						<Link to='/' id='blink'>
							Главная / Home
						</Link>
					</div>
				</div>

				<div className='gameContent'>
					<p>Game</p>
				</div>
			</div>
		</>
	)
}
