const modalButton = document.querySelector('.jsModalButton')
const modalClose = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.jsModalOverlay')

modalButton.addEventListener('click', event => {
  // Add class to the body when button has been clicked
  document.body.classList.add('is-open')
})

modalClose.addEventListener('click', event => {
  document.body.classList.remove('is-open')
})

modalOverlay.addEventListener('click', event => {
    if (event.target.matches('.modal-overlay')) {
      document.body.classList.remove('is-open')
    }
})


