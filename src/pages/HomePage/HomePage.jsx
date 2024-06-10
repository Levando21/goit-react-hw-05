/** @format */

import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/api";
import { Link } from "react-router-dom";

export default function HomePage() {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getTrendingMovies();
				setMovies(data);
			} catch (error) {
				setError(true);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h2>Trending Movies</h2>

			{error && <p>Error fetching movies.</p>}
			{movies.length > 0 &&
				movies.map((movie) => (
					<div key={movie.id}>
						<Link to={`/movies/${movie.id}`}>
							<p>{movie.title}</p>
						</Link>
					</div>
				))}
		</div>
	);
}