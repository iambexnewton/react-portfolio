import React from 'react';
import BlogContainer from '../../BlogContainer';

function Blogs() {
  return (
    <main className="main">
      <section className="section-wrapper">
        <div className="content-wrapper">
          <div className="top-line">A preview of my last 3 Blogs.</div>
          <div className="headline">
            Click the blog for more details and to view my previous Blogs.
          </div>
          <BlogContainer />
        </div>
      </section>
    </main>
  );
}

export default Blogs;
