/** @format */
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import getMovies from "../../api/api";
import MovieList from "../../components/MovieList";
import { useNavigate } from "react-router-dom";
export default function Movie() {
	const navigate = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();
		const query = event.target.elements.searchMovie.value.trim();
		if (query === "") {
			toast.error("Field cannot be empty");
			return;
		}
		handleSearch(query);
		navigate(`/movies?query=${query}`);
		event.target.reset();
		console.log(event.target.elements.searchMovie);
	};

	const [searchMovie, setSearchMovie] = useState("");
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);

	useEffect(() => {
		if (searchMovie === "") {
			return;
		}
		const getData = async () => {
			try {
				setLoading(true);
				setError(false);
				const data = await getMovies(searchMovie, page);
				setMovies((prevMovies) => [...prevMovies, ...data]);
				console.log(data);
			} catch (error) {
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		getData();
	}, [searchMovie, page]);

	const handleSearch = (query) => {
		setSearchMovie(query);
		setPage(1);
		setMovies([]);
	};

	return (
		<div>
			<header>
				<Toaster position="top-left" />
				<form onSubmit={handleSubmit}>
					<div className="search-bar">
						<input
							name="searchMovie"
							type="text"
							autoComplete="off"
							autoFocus
							placeholder="Search movie..."
						/>
						<button type="submit">Search</button>
					</div>
				</form>
			</header>
			{loading && <p>Loading...</p>}
			{error && <p>Error fetching movies.</p>}

			{movies.length > 0 && <MovieList movies={movies} />}
		</div>
	);
}
