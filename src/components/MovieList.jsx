/** @format */
import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
	const location = useLocation();
	return movies.map((movie) => (
		<div key={movie.id}>
			<Link
				to={`/movies/${movie.id}`}
				state={{ from: location }}>
				<p>{movie.title}</p>
			</Link>
		</div>
	));
}
