import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Promises from '../../features/apps/Promise'
import XO from '../../features/apps/XO'
import Sidebar from '../../features/sidebar/Sidebar'
import './Main.css'

export default function Main() {
	return (
		<>
			<div className='page main'>
				<Header />
				<div className='page__content'>
					<Sidebar />
					<div className='content__header'>
						<h1>Apps made by me</h1>
					</div>
					<div className='content__container cards'>
						<div className='cards__card'>
							<h4>Tic Tac Toe</h4>
							<XO />
						</div>
						<div className='cards__card'>
							<h4>Axios</h4>
							<Promises />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}
