import React from "react";
import BlogContainer from "../../BlogContainer";
import "../../../components/Blog.css";

function Blogs() {
  return (
    <main className="main">
      <section className="section-wrapper">
        <div className="content-wrapper">
          <div className="top-line">A preview of my last 3 Blogs.</div>

          <BlogContainer />
        </div>
      </section>
    </main>
  );
}

export default Blogs;
