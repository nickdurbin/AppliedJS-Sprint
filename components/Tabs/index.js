// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then((response) => {
    topicsArray = response.data.topics;
    topicsArray.forEach((item) => topics.appendChild(Tabs(item)));
  })
  .catch((error) => {
    console.log('topicsArray', error);
  })

function Tabs(data) {
  // Creating the element
  const tab = document.createElement('div');

  // Adding classes
  tab.classList.add('tab');

  // Adding textContent
  tab.textContent = data;

  return tab;
}