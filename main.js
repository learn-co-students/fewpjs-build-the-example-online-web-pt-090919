// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likeHeartButtons = document.getElementsByClassName('like')

for (const button of likeHeartButtons) {
  button.addEventListener("click", likeHeart)
}

function fullHeart(heart) {
  heart.innerText = FULL_HEART;
  heart.className = "activated-heart"
}

function emptyHeart(heart) {
  heart.innerText = EMPTY_HEART;
  heart.className = "";
}

function likeHeart(e) {
  let button = e.target;
  mimicServerCall("url")
    .then(function(serverCallMessage) {
      alert(serverCallMessage);
      if (button.innerText === EMPTY_HEART) {
        fullHeart(button);
      } else {
        emptyHeart(button);
      }
    })
    .catch(function(error) {
      let errorMessage = document.getElementById("modal");
      errorMessage.setAttributes('class', 'visible');
      errorMessage.innerHTML += `${error}`
      setTimeout(function() { errorMessage.setAttributes('class', 'hidden')}, 5000);
    });
}





//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
