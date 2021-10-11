import React from 'react';
import './Blog.css';
import {
  cleanTitle,
  truncateText,
  toText,
  convertDate,
} from '../utils/functions';

const BlogTile = (props) => {
  console.log(props);
  const { title, link, content, pubDate } = props.blogDate;

  function blogPost() {
    return (
      <a target="_blank" rel="noopener noreferrer" href={`${link}`}>
        <div className="textContainer">
          <h3 className="title">{truncateText(cleanTitle(title), 60)}</h3>
          <h4 className="date">{convertDate(pubDate)} </h4>
          <br />
          <p className="blog-Text">{truncateText(toText(content))}...</p>
          <br />
          <div className="read-more">Read More</div>
        </div>
      </a>
    );
  }

  return <div className="PostContainer">{blogPost()}</div>;
};

export default BlogTile;
