/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link, Route, Routes, NavLink } from "react-router-dom";
//import HomePage from "./pages/HomePage/HomePage";
//import Movies from "./pages/MoviePage/MoviesPage";
//import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import clsx from "clsx";
import "./App.css";
import css from "./App.module.css";
//import MovieCast from "./components/MovieCast";
//import MovieReview from "./components/MovieReviews";
import NotFoundPage from "./components/NotFoundPage";
import { lazy, Suspense } from "react";
const MoviesPage = lazy(() => import(`./pages/MoviePage/MoviesPage`));
const Navigation = lazy(() => import(`./components/Navigation`));
const HomePage = lazy(() => import(`./pages/HomePage/HomePage`));
const MovieDetailsPage = lazy(() =>
	import(`./pages/MovieDetailsPage/MovieDetailsPage`)
);
const MovieCast = lazy(() => import(`./components/MovieCast`));
const MovieReview = lazy(() => import(`./components/MovieReviews`));

function App() {
	const windowIsActive = ({ isActive }) => {
		return clsx(css.link, isActive && css.active);
	};
	return (
		<div>
			<header>
				<Navigation activate={windowIsActive} />
			</header>
			<Suspense fallback={null}>
				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/movies"
						element={<MoviesPage />}
					/>
					<Route
						path="/movies/:movieId"
						element={<MovieDetailsPage />}>
						<Route
							path="cast"
							element={<MovieCast />}
						/>
						<Route
							path="reviews"
							element={<MovieReview />}
						/>
					</Route>
					{
						<Route
							path="*"
							element={<NotFoundPage />}
						/>
					}
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
