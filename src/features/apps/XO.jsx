/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './XO.css'

export default function XO() {
	const [curGame, setCurGame] = useState(Array(9).fill(null))
	const [gameMap, setGameMap] = useState([])
	const [value, setValue] = useState('X')
	const [won, setWon] = useState(false)

	function backTo(i) {
		if (curGame === gameMap[i]) {
			return
		}
		const lastGame = gameMap.slice(0, i + 1)
		const nowGame = gameMap[i]
		setGameMap(lastGame)
		setCurGame(nowGame)
		setWon(false)
		lastGame.length % 2 ? setValue('O') : setValue('X')
	}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => win(), [curGame])

	function win() {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]
		const checkGame = curGame

		lines.some(line => {
			if (
				checkGame[line[0]] &&
				checkGame[line[0]] === checkGame[line[1]] &&
				checkGame[line[1]] === checkGame[line[2]]
			) {
				setWon(true)
			}
		})
	}

	return (
		<div className='gameXO'>
			{won || gameMap.length === 9 ? (
				<div className='end'>
					{gameMap.length === 9 ? (
						<p>Ничья</p>
					) : (
						<p>Победитель {value === 'X' ? 'O' : 'X'}</p>
					)}
				</div>
			) : (
				<>
					<div className='topXO'>
						<TopOX
							value={value}
							setValue={setValue}
							gameMap={gameMap}
							curGame={curGame}
							setCurGame={setCurGame}
							setGameMap={setGameMap}
						/>
					</div>
				</>
			)}

			<div className='botXO'>
				<BopOX
					gameMap={gameMap}
					value={value}
					backTo={backTo}
					setCurGame={setCurGame}
					setValue={setValue}
					setGameMap={setGameMap}
					setWon={setWon}
					won={won}
				/>
			</div>
		</div>
	)
}

function TopOX({ value, setValue, gameMap, curGame, setCurGame, setGameMap }) {
	const board = Array(9)
		.fill(null)
		.map((item, index) => (
			<button className='square' key={index} onClick={() => sqrClick(index)}>
				<Square squareI={index} curGame={curGame} />
			</button>
		))

	function sqrClick(index) {
		if (curGame[index] === 'X' || curGame[index] === 'O') {
			return
		} else {
			const newCurGame = curGame.slice()
			newCurGame[index] = value
			setCurGame(newCurGame)
			value === 'X' ? setValue('O') : setValue('X')
			setGameMap([...gameMap, newCurGame])
		}
	}

	return <div className='squares'>{board}</div>
}

function Square({ squareI, curGame }) {
	return <p className='square__item'>{curGame[squareI]}</p>
}

function BopOX({
	gameMap,
	value,
	backTo,
	setCurGame,
	setValue,
	setGameMap,
	setWon,
	won,
}) {
	return (
		<>
			<div className='botXO__turns'>
				<p>Ходы:</p>
				<div className='turns'>
					{gameMap.map((e, i) => (
						<button className='turns__btn' key={i} onClick={() => backTo(i)}>
							{i + 1}
						</button>
					))}
				</div>
			</div>
			{won || gameMap.length === 9 ? (
				<div></div>
			) : (
				<div className='botXO__player'>
					<p>Player&rsquo;s turn: {value}</p>
				</div>
			)}
			<div className='botXO__restart'>
				<button
					className='btn__restart'
					onClick={() => {
						setCurGame([])
						setValue('X')
						setGameMap([])
						setWon(false)
					}}
				>
					<p>Restart</p>
				</button>
			</div>
		</>
	)
}
