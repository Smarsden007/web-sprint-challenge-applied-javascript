const Header = (title, date, temp) => {
  
const newsHeader = document.createElement('div');
const newsDate = document.createElement('span');
const newsTitle = document.createElement('h1');
const newsTemp = document.createElement('span');

//Hierachy
newsHeader.appendChild(newsDate);
newsHeader.appendChild(newsTitle);
newsHeader.appendChild(newsTemp);

//text
newsDate.textContent = date;
newsTitle.textContent = title;
newsTemp.textContent = temp;


//class name

newsHeader.classList.add('header')
newsDate.classList.add('date')
newsTemp.classList.add('temp')


return newsHeader
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {

  //enclosing in try catch as selector may not be valid
  try {
    const target_element = document.querySelector(selector)

    if (target_element == null)
      throw Error(`target element ${selector} not found`)

    //create the header element with class body
    //We observe in the Header() function that the final element gets appended to the document body
    Header("header-1", "11/02/21", "#1")

    //now we will search for this element under the body tag with class "header" and detach it from the dom
    let header_element = document.querySelector("div.header")

    //detach the element from its parent
    //header_element = header_element.parentElement.removeChild(header_element)

    //attach it again under the target_element
    target_element.appendChild(header_element)

  }
  catch (e) {
    console.error(e.message)
  }
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
