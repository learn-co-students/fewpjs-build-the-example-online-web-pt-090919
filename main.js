// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeBtns = document.getElementsByClassName('like')

for (const btn of likeBtns) {
  btn.addEventListener("click", addLike)
}

function fillHeart(heart) {
  heart.innerText = FULL_HEART;
  heart.className = "activated-heart"
}

function clearHeart(heart) {
  heart.innerText = EMPTY_HEART;
  heart.className = "";
}

function addLike(e) {
  let btn = e.target;
  mimicServerCall("url")
    .then(function(serverMsg) {
      alert(serverMsg);
      if (btn.innerText === EMPTY_HEART) {
        fillHeart(btn);
      } else {
        clearHeart(btn);
      }
    })
    .catch(function(message) {
      debugger;
      let errorMsg = document.getElementById("modal");
      errorMsg.className = "";
      errorMsg.innerHTML += `${message}`
      setTimeout(function() { errorMsg.className = "hidden"}, 5000);
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
