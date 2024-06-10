/** @format */

import axios from "axios";

const ACCESS_KEY = "cb987db4280f8ba2b4b1a2567a27fe93";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export default async function getMovies(searchMovie, page) {
	const { data } = await axios.get(`/search/movie`, {
		params: {
			api_key: ACCESS_KEY,
			query: searchMovie,
			page,
			per_page: 12,
		},
	});

	return data.results;
}

export async function getSingleMovie(id) {
	const { data } = await axios.get(`/movie/${id}`, {
		params: {
			api_key: ACCESS_KEY,
		},
	});

	return data;
}

export async function getTrendingMovies() {
	const { data } = await axios.get(`/trending/movie/week`, {
		params: {
			api_key: ACCESS_KEY,
		},
	});

	return data.results;
}

export async function getCast(id) {
	const { data } = await axios.get(`/movie/${id}/credits`, {
		params: {
			api_key: ACCESS_KEY,
		},
	});

	return data;
}
