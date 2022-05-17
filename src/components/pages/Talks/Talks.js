import React from "react";
import BlogContainer from "../../BlogContainer";
import "../../../components/Blog.css";

function Talks() {
  document.title = "Talks";
  return (
    <main className="main">
      <section className="section-wrapper">
        <div className="content-wrapper">
          <div className="section-title">Talks</div>
          <div className="text">A preview of my last 3 Blogs.</div>
          <BlogContainer />
        </div>
      </section>
    </main>
  );
}

export default Talks;
