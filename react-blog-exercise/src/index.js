import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./header.jsx";
import BlogList from "./blog.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BlogList />
  </React.StrictMode>,
  document.getElementById("root")
);
