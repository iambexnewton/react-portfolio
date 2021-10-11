export function cleanTitle(checkTitle) {
  checkTitle = checkTitle.replace('amp;', '');
  return checkTitle;
}

export function truncateText(text) {
  var maxLength = 300;
  var trimmedString = text.substr(0, maxLength);
  return trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')),
  );
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
