
//const Endpoint = 'https://api.aylien.com/api/v1/absa/hotels'

//const API_KEY = '88a6158c6db9e538eaa4e322e01f0777'

//const API_ID = 'd99e0e5b';

//const API_ID Credentials '1409619642320'

const injectDataIntoHTML = jsonData => {
	document.getElementById('results').innerText = JSON.stringify(responseFromSentimentAPIRoute);
	// document. ...
};

async function checkForQuestion(value, length) {
	if (length > 0 && length < 51) {
		const query = {query: { text: value}};
		console.log('before calling my server/index.js API, query:', query);
		const responseFromSentimentAPIRoute = await postData('http://localhost:8080/sentiment', query);
			//.then(() => {
		console.log('responseFromSentimentAPIRoute:', responseFromSentimentAPIRoute);
		injectDataIntoHTML(responseFromSentimentAPIRoute);
		
				
				//getData('/add', { aspect: responseFromSentimentAPIRoute })
					//.then((data) => {
					//	`${data.aspect}${data.text}`;
					//});

					
			//});
	} else {
		alert('Please enter between 1 and 50 characters!');
	}
}
//console.log("::: Running checkForName :::", inputText);
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