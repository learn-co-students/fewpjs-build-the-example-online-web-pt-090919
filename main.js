// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likeBtns = document.querySelectorAll('.like');
let modal = document.querySelector('div#modal');
let modalMessage = modal.querySelector('p#modal-message')

likeBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let glyph = btn.querySelector('span.like-glyph')
    if (glyph.textContent === EMPTY_HEART) {
      glyph.textContent = FULL_HEART
      glyph.classList.add('activated-heart')
    } else {
      glyph.textContent = EMPTY_HEART
      glyph.classList.remove('activated-heart')
    }
  })
})

mimicServerCall()
  .then(serverMessage => {
    alert('You notified the server!')
    alert(serverMessage)
  })
  .catch(err => {
    modal.classList.remove('hidden');
    modalMessage.textContent = err.message
    setTimeout(hideModal, 5000)
  })

const hideModal = () => {
  modal.classList.add('hidden')
}




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}