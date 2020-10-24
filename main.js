const modalButton = document.querySelector('.jsModalButton')
const modalClose = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')

modalButton.addEventListener('click', event => {
  // Add class to the body when button has been clicked
  document.body.classList.add('is-open')
})

modalClose.addEventListener('click', event => {
  document.body.classList.remove('is-open')
})

modalOverlay.addEventListener('click', event => {
  document.body.classList.remove('is-open')
})



/* Step 1 
  
  - When the user hits 'click me' the modal opens 
  - When the user clicks outside of the modal - we want it to close 

  */

