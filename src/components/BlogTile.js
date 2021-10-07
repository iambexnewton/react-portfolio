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
  const { title, link, content, pubDate, thumbnail } = props.blogDate;

  function blogPost() {
    console.log(props);
    return (
      <a target="_blank" rel="noopener noreferrer" href={`${link}`}>
        <div className="imageContainer">
          <img src={`${thumbnail}`} className="Image" alt=""></img>
        </div>
        <div className="textContainer">
          <h3 className="title">{truncateText(cleanTitle(title), 60)}</h3>
          <h4 className="date">{convertDate(pubDate)} </h4>
          <br />
          <p className="blog-Text">
            {truncateText(toText(content), 500)}...
          </p>{' '}
          <br />
          <div className="read-more">Read More</div>
        </div>
      </a>
    );
  }

  return <div className="PostContainer">{blogPost()}</div>;
};

export default BlogTile;
