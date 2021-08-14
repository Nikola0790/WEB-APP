import React from "react";
import PropTypes from "prop-types";
import "./blog.css";

export const Blog = ({ title, text }) => {
  return (
    <div className="blog">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
