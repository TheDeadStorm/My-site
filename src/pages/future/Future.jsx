import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Sidebar from '../../features/sidebar/Sidebar'
import './Future.css'

export default function Future() {
	return (
		<>
			<div className='page future'>
				<Header />
				<div className='page__content'>
					<Sidebar />
					<div className='content__header'>
						<h1>My future projects</h1>
					</div>
					<div className='content__container'></div>
				</div>
				<Footer />
			</div>
		</>
	)
}
