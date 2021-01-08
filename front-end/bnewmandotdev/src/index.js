import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import HomeIntro from "./Components/HomeIntroduction";
import "./styles.scss";

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<HomeIntro />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
