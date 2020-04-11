
async function checkForQuestion(value, length) {
	if (length > 0 && length < 51) {
		const query = {query: { text: value}};
		//console.log('before calling my server/index.js API, query:', query);
		const responseAPIRoute = await postData('http://localhost:8080/sentiment', query);
				//alert('R we there yet ?');
				console.log(responseAPIRoute);
					//document.getElementById('results').innerText = JSON.stringify(responseAPIRoute)
					document.getElementById('results').innerText =`
					Polarity: ${responseAPIRoute.polarity}
					Subjectivity: ${responseAPIRoute.subjectivity}
					Text: ${responseAPIRoute.text}
					Polarity confidence: ${Math.round(responseAPIRoute.polarity_confidence * 100)}%
					Subjectivity confidence: ${Math.round(responseAPIRoute.subjectivity_confidence * 100)}%
					`;
					}
	else {
		alert('Please enter between 1 and 50 characters!');
	}
}

const postData = async (url = '', data = {}) => {
	try {
		// const newData = await response.json();
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});
		return await response.json();
	} catch (error) {
		console.log('Error: ', error);
	}
};

const getData = async (url) => {
	const response = await fetch(url);

	try {
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Error: ', error);
	}
};

export { checkForQuestion }