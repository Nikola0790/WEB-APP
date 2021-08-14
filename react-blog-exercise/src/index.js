import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/header";
import BlogList from "./components/blogList";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BlogList />
  </React.StrictMode>,
  document.getElementById("root")
);
