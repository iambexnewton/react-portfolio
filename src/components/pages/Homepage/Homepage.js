import React from "react";
import HeroSection from "../../HeroSection";
import BlogContainer from "../../BlogContainer";
import ProjectSection from "../Projects/ProjectSection";

function Homepage() {
  return (
    <main className="main">
      <HeroSection />
      <div className="top-line">Projects.</div>
      <ProjectSection />
      <div className="top-line">Blogs.</div>
      <BlogContainer />
    </main>
  );
}

export default Homepage;
