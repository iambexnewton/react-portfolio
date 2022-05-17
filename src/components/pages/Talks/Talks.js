import React from "react";
import BlogContainer from "../../BlogContainer";
import "../../../components/blogs.css";

function Talks() {
  document.title = "Talks";
  return (
    <main className="main">
      <section className="section-wrapper">
        <div className="content-wrapper">
          <div className="section-title">Tech Talks</div>
          <div className="text"></div>
          <BlogContainer />
        </div>
      </section>
    </main>
  );
}

export default Talks;
