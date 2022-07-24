const API_URL = 'http://localhost:8000/api'

exports.fetchQuote = async function () {
	const options = {
		method: 'GET',
		headers: { 
			'Accept': 'application/json'
		}
	}
	const response = await fetch(API_URL + '/naruto/quote', options)
    console.log("🚀 ~ file: narutoQuotesService.js ~ line 5 ~ getQuote ~ response", response)

	if (response.ok) {
		const json = response.json();
		return json;
	} else {
		return null
	}
}