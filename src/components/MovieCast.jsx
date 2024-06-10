/** @format */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCast } from "../api/api";

export default function MovieCast() {
	const { moviesId } = useParams();
	const [cast, setCast] = useState([]);

	useEffect(() => {
		if (!moviesId) return;
		const fetchCastData = async () => {
			try {
				const data = await getCast(moviesId);
				setCast(data);
				console.log(data);
			} catch (error) {
				console.error("Error fetching cast details:", error);
			}
		};

		if (moviesId) {
			fetchCastData();
		}
	}, [moviesId]);

	return (
		<div>
			<ul>
				{cast &&
					cast.map((actor) => (
						<li key={actor.id}>
							<img
								src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
								alt={actor.id}
								width="100"
								height="100"
							/>
							<p>{actor.name}</p>
						</li>
					))}
			</ul>
		</div>
	);
}
