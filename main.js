// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

hearts = document.getElementsByClassName("like-glyph");

for (const heart of hearts) {
  heart.addEventListener("click", mimicServerCall.bind(heart), false)
};

function heartify(heat) {
  const wuv = heat.target;
  if (wuv.classList.length < 2) {
    wuv.textContent = '♥';
    wuv.classList.add("activated-heart");
    console.log("owo");
  }
  else {
    wuv.textContent = '♡'
    wuv.classList.remove("activated-heart");
    console.log("uwu");
  };
};

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(heat, url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
        heartify(heat);
      }
    }, 300);
  });
}
