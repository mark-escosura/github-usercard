/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

import axios from "axios";

const gitHubCard = document.querySelector('div.cards');

axios.get('https://api.github.com/users/mark-escosura')
  .then((response) => {

    gitHubCard.appendChild(gitHubCardMaker(response.data));

  // for(let i = 0; i < followersArray.length; i++) {
  //   axios.get(`https://api.github.com/users/${followersArray[i]}`).then((response) => {
  //     // gitHubCard.appendChild(gitHubCardMaker(response.data));
  //     gitHubCardMaker(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  });

const followersArray = [
  'mark-escosura',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];

followersArray.map(function (user) {
  axios.get('https://api.github.com/users/' + [user]).then((response) => {
    const divCard = gitHubCardMaker(response);
    gitHubCard.appendChild(divCard);
  })
  .catch((error) => {
    console.log(error);
  })
});

function gitHubCardMaker(object) { // DOM constructor Function
  
  const card = document.createElement('div'); // Parent Element 
  const profilePic = document.createElement('img'); // Child Element to card
  const cardInfo = document.createElement('div'); // Child Element to card
  const profileName = document.createElement('h3'); // Child Element to cardInfo
  const profileUserName = document.createElement('p'); // // Child Element to cardInfo
  const location = document.createElement('p'); // Child Element to cardInfo
  const profileKey = document.createElement('p'); // Child Element to cardInfo
  const profileLink = document.createElement('a'); // Child Element to profileKey
  const profileFollowers = document.createElement('p'); // Child Element to cardInfo
  const profileFollowing = document.createElement('p'); // Child Element to cardInfo
  const profileBio = document.createElement('p'); // Child Element to cardInfo

  card.appendChild(profilePic); // appendChild Object Element "profilePic"  -> the object Element "card"
  card.appendChild(cardInfo);
  cardInfo.appendChild(profileName);
  cardInfo.appendChild(profileUserName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profileKey);
  profileKey.appendChild(profileLink);
  cardInfo.appendChild(profileFollowers);
  cardInfo.appendChild(profileFollowing);
  cardInfo.appendChild(profileBio);

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  profileName.classList.add('name');
  profileUserName.classList.add('username');

  profilePic.src = object.data.avatar_url; // parameter.data(API object).key
  profileName.textContent = object.data.name;
  profileUserName.textContent = object.data.login;
  location.textContent = `Location: ${object.data.location}`;
  profileKey.textContent = `Profile :`; // I want to put a hyperlink here with the text "GitHub"
  profileLink.href = object.data.html_url;
  profileLink.textContent = object.data.html_url;
  profileFollowers.textContent = `Followers: ${object.data.followers}`;
  profileFollowing.textContent = `Following: ${object.data.following}`;
  profileBio.textContent = object.data.bio;
console.log(profileLink);
  return card;

}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
