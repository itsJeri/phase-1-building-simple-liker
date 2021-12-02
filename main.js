// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const init = () => {
  const likeButton = document.querySelectorAll('.like-glyph')
  // target each likeButton individually
  for(const glyph of likeButton)
  glyph.addEventListener('click', heartCallback)
}

  function heartCallback(e) {
    // define event target on specific likeButton
    const heart = e.target;
    mimicServerCall()
      .then((res) => {
        // toggles red color
        heart.classList.toggle('activated-heart')
        // toggles Full/Empty heart
        if(heart.innerText === EMPTY_HEART) {
          heart.innerText = FULL_HEART
        } else if (heart.innerText === FULL_HEART) {
            heart.innerText = EMPTY_HEART;
          }
        }
      )
      .catch((err) => {
        // removes .hidden to show error
        document.querySelector('.hidden').classList.remove('hidden');

        setTimeout(() => {
          // adds .hiiden to hide error again
          document.querySelector('#modal').classList.add('hidden');
        }, 3000); // after 3 seconds
      })
  }

  


document.addEventListener('DOMContentLoaded', init);

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
