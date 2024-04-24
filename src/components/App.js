import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log("BlogData:", blogData);

function App() {
  const { name, image, alt, about, posts } = blogData;

  return (
    <div className="App">
      <Header name={name} />
      <About image={image} alt={alt} about={about} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
