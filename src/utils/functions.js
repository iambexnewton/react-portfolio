import React from 'react';

export function cleanTitle(checkTitle) {
  checkTitle = checkTitle.replace('amp;', '');
  return checkTitle;
}

export function truncateText(text, len) {
  return text.length > len ? text.substring(0, len) : text;
}

export function toText(block) {
  let tag = document.createElement('div');
  tag.innerHTML = block;
  block = tag.innerText;
  return block;
}

export function convertDate(date) {
  let dateArray = date.slice(0, 10).split('-');
  let year = dateArray.shift();
  dateArray.push(year);
  console.log(date);
  return `Published: ${dateArray.join('/')}`;
}
