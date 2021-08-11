import React from "react";
import { blogContent } from "./data/data.js";
import "./blog.css";

function BlogList() {
  return (
    <main>
      {blogContent.map((content, index) => {
        return (
          <div className="blog" key={index}>
            <h2>{content.title}</h2>
            <p>{content.text}</p>
          </div>
        );
      })}
    </main>
  );
}

export default BlogList;
