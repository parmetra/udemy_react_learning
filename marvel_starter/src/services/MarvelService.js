import { useHttp } from "../hooks/http.hook";

const useMarverService = () => {
	const {loading, request, error, clearError} = useHttp();
	const _apiBase = "https://gateway.marvel.com:443/v1/public/";
	const _apiKey = "apikey=f4bcc2ac3bb99f27cd2d3f164a8f91dd";
	const _baseOffset = 450;
	const _baseOffsetComics = 10;

	

	const getAllCharachters = async (offset = _baseOffset) => {
		const res = await request(`${_apiBase}characters?limit=${9}&offset=${offset}&${_apiKey}`);
		return res.data.results.map(_transformCharacher);
	}

	const getCharachter = async (id) => {
		const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
		return _transformCharacher(res.data.results[0]);
	}

	const getAllComics = async (offset = _baseOffsetComics) => {
		const res = await request(`${_apiBase}comics?issueNumber=${5}&limit=${8}&offset=${offset}&${_apiKey}`);
		return res.data.results.map(_transformComics);
	}

	const getComic = async (id) => {
		const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
		return _transformComics(res.data.results[0]);
	}

	const getCharachterByName = async (name) => {
		const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
		if (res.data.results.length < 1) return null;
		return _transformCharacher(res.data.results[0]);
	}
	
	const _transformCharacher = (charachter) => {
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

	const _transformComics = (comics) => {
		return {
			id: comics.id,
			digitalId: comics.digitalId,
			title: comics.title,
			description: comics.description ? comics.description : `Описание отсутствует`,
			pageCount: comics.pageCount,
			prices: comics.prices[0].price ? `${comics.prices[0].price} $` : `unavailable`,
			thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
			language: comics.textObjects[0]?.language ? comics.textObjects[0].language : `—`
		}
	}

	return {loading, error, getAllCharachters, getCharachter, clearError, getAllComics, getComic, getCharachterByName};
}

export default useMarverService;