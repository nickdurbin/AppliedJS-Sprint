// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then((response) => {
    Object.values(response.data.articles).forEach(item => {
      item.forEach(item => {
        let cards = document.querySelector('.cards-container');
        cards.appendChild(Cards(item));
      })
    })
  })
  .catch((error) => {
    console.log(error, 'Request could not be completed.');
  })

function Cards(data) {
  // Creating the elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imageContainer = document.createElement('div');
  const image = document.createElement('img');
  const byAuthor = document.createElement('span');

  // Adding classes to elements
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imageContainer.classList.add('img-container');

  // Appending the elements
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imageContainer);
  imageContainer.appendChild(image);
  author.appendChild(byAuthor);

  // Adding textContent
  headline.textContent = data.headline;
  image.src = data.authorPhoto;
  image.textContent = data.image;
  byAuthor.textContent = data.authorName;

  return card;
}