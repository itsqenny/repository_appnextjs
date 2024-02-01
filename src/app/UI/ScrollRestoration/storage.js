"use client"

export const ScrollPos = [0, 0]
const uniq = "revotale_nextjs_scroll_restoration"
const getKey = (pos) => `${uniq}_${pos}`
export const HistoryState = null

let replaceStateCounter = 0
const replaceStateLimit = 80
const replaceStateInterval = 11000 // 10 секунд

export const setCurrentScrollHistory = ([x, y]) => {
	//console.log(`Remember history scroll to ${x} ${y}. Href ${window.location.href}.`);
	x = Math.max(x, 0)
	y = Math.max(y, 0)

	const newState = window.history.state ?? {}
	const updatedState = {
		...newState,
		[getKey("x")]: x,
		[getKey("y")]: y,
	}

	// Увеличиваем счетчик
	replaceStateCounter++

	// Выводим информацию в консоль перед вызовом replaceState
	//console.log(`Calling replaceState. Counter: ${replaceStateCounter}, Limit: ${replaceStateLimit}`);

	// Вызываем replaceState только если не превышено ограничение и прошло достаточно времени
	if (replaceStateCounter <= replaceStateLimit) {
		window.history.replaceState(updatedState, "")
	}

	// Выводим информацию в консоль после вызова replaceState
	//console.log(`replaceState called. Counter: ${replaceStateCounter}, Limit: ${replaceStateLimit}`);

	// Сбрасываем счетчик после интервала
	setTimeout(() => {
		replaceStateCounter = 0
	}, replaceStateInterval)
}

export const getScrollFromState = (state) => {
	const retrieve = (name) => {
		if (state === null) {
			return null
		}
		const key = getKey(name)
		const value = state[key]
		if (value === null) {
			return null
		}
		const num = Number(value)
		return isNaN(num) ? null : num
	}

	const x = retrieve("x")
	const y = retrieve("y")
	return x !== null && y !== null ? [x, y] : null
}
