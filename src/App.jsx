/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Movies from "./components/MoviePage/MoviePage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import "./App.css";

function App() {
	return (
		<div>
			<NavBar />
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
					element={<MovieDetailsPage />}
				/>
				<Route
					path="*"
					element={<div>404</div>}
				/>
			</Routes>
		</div>
	);
}

export default App;
