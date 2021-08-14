import React from "react";
import { blogContent } from "../data/data";
import { Blog } from "./blog";
import "./blog.css";

function BlogList() {
  return (
    <main>
      {blogContent.map((content, index) => {
        return <Blog title={content.title} text={content.text} key={index} />;
      })}
    </main>
  );
}

export default BlogList;
