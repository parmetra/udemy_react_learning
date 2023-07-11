

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

	getAllCharachters = async () => {
		const res = await this.getResource(`${this._apiBase}characters?limit=${9}&offset=450&${this._apiKey}`);
		return res.data.results.map(this._transformCharacher);
	}

	getCharachter = async (id) => {
		const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
		return this._transformCharacher(res.data.results[0]);
	}
	
	_transformCharacher = (charachter) => {
		return {
			id: charachter.id,
			name: charachter.name,
			description: charachter.description ? `${charachter.description.slice(0, 220)}...` : `Описание отсутствует`,
			thumbnail: `${charachter.thumbnail.path}.${charachter.thumbnail.extension}`,
			homepage: charachter.urls[0].url,
			wiki: charachter.urls[1].url,
			comics: charachter.comics.items
		}
	}
}

export default MarverService;