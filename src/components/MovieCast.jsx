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

		fetchCastData();
	}, [moviesId]);

	return (
		<div>
			<h2>Movie Cast</h2>
			<ul>
				{cast.map((actor) => (
					<li key={actor.id}>
						<p>{actor.name}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
