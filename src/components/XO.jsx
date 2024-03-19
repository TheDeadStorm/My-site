export default function XO() {
	const square = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	return (
		<>
			<div className='gameXO'>
				{square.map((e, i) => (
					<div key={i} className='square'>
						{(e = <div id={i}></div>)}
					</div>
				))}
			</div>
		</>
	)
}
