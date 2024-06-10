/** @format */
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
	return (
		<div>
			<h2>Page not found =§=§=§=§</h2>
			<p>
				Please go back to
				<br />
				<NavLink to="/">Home</NavLink>
			</p>
		</div>
	);
}
