const modalButton = document.querySelector('.jsModalButton')
const modalClose = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.jsModalOverlay')

modalButton.addEventListener('click', event => {
  document.body.classList.add('is-open')
})

modalClose.addEventListener('click', event => {
  document.body.classList.remove('is-open')
})

// Event Delegation
modalOverlay.addEventListener('click', event => {
  if (!event.target.closest('.modal')) {
      document.body.classList.remove('is-open')
  }
})


