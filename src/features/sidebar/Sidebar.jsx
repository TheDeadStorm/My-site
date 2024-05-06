import classNames from 'classnames'
import { useState } from 'react'
import './Sidebar.css'

export default function Sidebar() {
	const [menu, setMenu] = useState(false)
	const open = 'chevron_right'
	const close = 'chevron_left'

	return (
		<>
			<div
				className={classNames(
					'nav__arrow',
					menu ? 'nav__arrow_open' : 'nav__arrow_close'
				)}
			>
				<span
					className=' material-symbols-outlined'
					onClick={() => setMenu(!menu)}
				>
					{menu ? close : open}
				</span>
			</div>
			<div className={classNames('sidebar', menu ? 'sidebar_active' : null)}>
				<div className='sidebar__header'>H</div>
				<div className='sidebar__content'>
					<p>T</p>
					<p>A</p>
					<p>K</p>
					<p>E</p>
					<p>M</p>
					<p>E</p>
					<p>T</p>
					<p>O</p>
					<p>J</p>
					<p>O</p>
					<p>B</p>
				</div>
			</div>
		</>
	)
}
