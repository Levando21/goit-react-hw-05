/** @format */

import { useEffect, useState, useRef } from "react";
import { getSingleMovie } from "../../api/api";
import { useParams, Link } from "react-router-dom";

export default function MovieDetailsPage() {
	const { moviesId } = useParams();
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		if (!moviesId) return;
		const getData = async () => {
			try {
				const data = await getSingleMovie(moviesId);
				setMovie(data);
				console.log(data);
			} catch (error) {
				console.error("Error fetching movie details:", error);
			}
		};

		if (moviesId) {
			getData();
		}
	}, [moviesId]);
	return (
		<div>
			{movie && (
				<div>
					<h2>{movie.original_title}</h2>
					<p>Date of production: {movie.release_date}</p>
					<img
						src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						alt={movie.id}
						width="300"
						height="300"
					/>

					<h3>Additional information:</h3>
					<ul>
						<li>
							<Link to={`/movies/${moviesId}/cast`}>Cast</Link>
						</li>
						<li>
							<Link to={`/movies/${moviesId}/reviews`}>Reviews</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}
