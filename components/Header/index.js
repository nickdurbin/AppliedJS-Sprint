// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

let container = document.querySelector('.header-container');

container.appendChild(Header());

function Header() {
  // Creating the elements
  const header = document.createElement('div');
  const date = document.createElement('span');
  const headline = document.createElement('h1');
  const temp = document.createElement('span');

  // Adding the classes
  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  // Appending elements
  header.appendChild(date);
  header.appendChild(headline);
  header.appendChild(temp);

  // Adding textContent
  date.textContent = 'August 16, 2019';
  headline.textContent = 'Lambda Times';
  temp.textContent = '98°';

  return header;
}