/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link, Route, Routes, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Movies from "./pages/MoviePage/MoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import clsx from "clsx";
import "./App.css";
import css from "./App.module.css";
import MovieCast from "./components/MovieCast";
import MovieReview from "./components/MovieReviews";
function App() {
	const windowIsActive = ({ isActive }) => {
		return clsx(css.link, isActive && css.active);
	};
	return (
		<div>
			<header>
				<nav className={css.nav}>
					<NavLink
						to="/"
						className={windowIsActive}>
						Home
					</NavLink>
					<NavLink
						to="/movies"
						className={windowIsActive}>
						Movie
					</NavLink>
				</nav>
			</header>

			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/movies"
					element={<Movies />}
				/>
				<Route
					path="/movies/:moviesId"
					element={<MovieDetailsPage />}>
					<Route
						path="cast"
						element={<MovieCast />}
					/>
					<Route
						path="review"
						element={<MovieReview />}
					/>
				</Route>
				{
					<Route
						path="*"
						element={<div>404</div>}
					/>
				}
			</Routes>
		</div>
	);
}

export default App;
