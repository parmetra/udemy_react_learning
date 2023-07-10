

class MarverService {
	_apiBase = "https://gateway.marvel.com:443/v1/public/";
	_apiKey = "apikey=f4bcc2ac3bb99f27cd2d3f164a8f91dd";

	getResource = async (url) => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	}

	getAllCharachters = () => {
		return this.getResource(`${this._apiBase}characters?limit=9&offset=450&${this._apiKey}`);
	}

	getCharachter = (id) => {
		return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
	}
	
}

export default MarverService;