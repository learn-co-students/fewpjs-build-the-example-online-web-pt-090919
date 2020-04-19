// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let heartBtn = document.querySelector('.like')
let modal = document.querySelector('#modal')
let modalMessage = modal.querySelector('#modal-message')

heartBtn.forEach(btn => {
  btn.addEventListener('click', (event) => {
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
  alert('Server Alerted')
  alert(serverMessage)
})
.catch(error => {
  modal.classList.remove('hidden');
  modelMessage.textContent = error.message
  setTimeout(hideModal, 5000)
  })

  const hideModal = () => {
    modal.classList.add('hidden')
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
