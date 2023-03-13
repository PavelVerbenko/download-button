const initGetWeather = () => {
	// your code
	const button = document.querySelector('#my-button')
	button.addEventListener('click', e => {
		e.target.textContent = 'Loading...'
	})
}

// Sample usage - do not modify
initGetWeather();