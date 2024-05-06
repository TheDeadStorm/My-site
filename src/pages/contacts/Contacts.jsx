import CopyToClipboard from 'react-copy-to-clipboard'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Sidebar from '../../features/sidebar/Sidebar'
import './Contacts.css'

export default function Contacts() {
	return (
		<>
			<div className='page contacts'>
				<Header />
				<div className='page__content'>
					<Sidebar />
					<div className='content__header'>
						<h1 className='h1'>My contacts:</h1>
					</div>
					<div className='content__container'>
						<div className='content__links'>
							<a
								href='https://t.me/KorolFishey'
								className='contacts__link'
								target='_blank'
							>
								<img
									src='https://it-news.online/wp-content/uploads/2023/05/Telegram.png'
									alt='Telegram'
									width='60px'
									className='contacts__img'
								/>
								<span>Telegram</span>
							</a>
							<a
								href='https://vk.com/korolmc'
								className='contacts__link'
								target='_blank'
							>
								<img
									src='https://pk33.mskobr.ru/files/novosti/Соц%20сети/d91bcb8ad3862eef5b07e48bc149f4.png'
									alt='Vkontakte'
									className='contacts__img'
									width='60px'
								/>
								<span>Vkontakte</span>
							</a>
							<p className='contacts__link'>
								<img
									src='https://cdn4.iconfinder.com/data/icons/flatastic-2/256/email-open-1024.png'
									alt='Mail'
									className='contacts__img'
								/>
								<CopyToClipboard
									text='Maximim007-2012@yandex.ru'
									onCopy={() => alert('E-mail copied')}
								>
									<span>E-Mail</span>
								</CopyToClipboard>
							</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}
