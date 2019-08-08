/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/etridgely')
  .then (data => {
    console.log('data: ', data)
    const myInfo = data.data;
    console.log('UserInfo: ', myInfo)

  const cardPlace = document.querySelector('.cards');
  const cardInfo = githubCard(myInfo)
  cardPlace.appendChild(cardInfo)
})
// promise
//   .then((response) => {
//     console.log(response)
//     response.data.forEach( item => {
//       let newCard = githubCard(item)
//       cardPlace.appendChild(newCard)
//     })
//   })
//   .catch((err) => {
//     console.log(err)
//   })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [

  `tetondan`,
  `dustinmyers`,
  `justsml`,
  `luishrd`,
  `bigknell`
];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then (data => {
    const card = githubCard(data.data)
    const cards = document.querySelector(`.cards`)
    cards.appendChild(card)
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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
function githubCard(obj){

  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardTitle = document.createElement('h3');
  const cardUser = document.createElement('p');
  const location = document.createElement('p');
  const userProfile = document.createElement('p');
  const userProfileUrl = document.createElement('a');
  const userFollower = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  //classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  cardTitle.classList.add('name');
  cardUser.classList.add('username');

  //append
  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  card.appendChild(cardTitle);
  card.appendChild(cardUser);
  card.appendChild(location);
  card.appendChild(userProfile);
  card.appendChild(userProfileUrl);
  card.appendChild(userFollower);
  card.appendChild(userFollowing);
  card.appendChild(userBio);

  cardImg.src = obj.avatar_url
  cardTitle.textContent = obj.name
  location.textContent = obj.location
  cardUser.textContent = obj.login
  const userProfileActual = obj.url
  userProfileUrl.innerHTML = userProfileActual.link(obj.url)
  userFollower.textContent = `Followers: ${obj.followers}`
  userFollowing.textContent = `Following: ${obj.following}`
  userBio.textContent = obj.bio
  
  userProfileUrl.src = obj


  return card;
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
