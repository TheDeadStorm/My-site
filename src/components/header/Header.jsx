import { Link } from 'react-router-dom'
import Theme from '../../features/theme/Theme'
import './Header.css'

export default function Header() {
	return (
		<header className='header'>
			<div className='header__logo'>
				<img
					src='https://i.pinimg.com/originals/ef/76/17/ef7617a84ce3dbc6fb96f0d29692810a.jpg'
					alt='rnd'
					className='logo'
				/>
			</div>
			<div className='header__links'>
				<Link to='/'>Home</Link>
				<Link to='/future'>FAQ</Link>
				<Link to='/contacts'>Contacts</Link>
			</div>
			<Theme />
		</header>
	)
}
