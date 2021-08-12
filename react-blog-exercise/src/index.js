import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/header";
import BlogList from "./components/blog";

ReactDOM.render(
  <React.StrictMode>
    <Header title="My React Blog" />
    <BlogList />
  </React.StrictMode>,
  document.getElementById("root")
);
