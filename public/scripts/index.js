const buttonSearch = document.querySelector('#page-home main a')
const modal = document.querySelector('#modal')
const close = document.querySelector('#modal .header a')

// ouvindo o evento de clique 
buttonSearch.addEventListener('click', () => {
  // mostrando o modal
  modal.classList.remove('hide')
})

// ouvindo o evento de click
close.addEventListener('click', () => {
  // escondendo o modal
  modal.classList.add('hide')
})