/** @format */
import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
	return movies.map((movie) => (
		<div key={movie.id}>
			<Link to={`/movies/${movie.id}`}>
				<p>{movie.title}</p>
			</Link>
		</div>
	));
}
