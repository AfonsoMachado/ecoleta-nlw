
function populateUFs() {
  const ufSelect = document.querySelector('select[name=uf]')

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states => {
      for (const state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
      }
    })
}

populateUFs()

function getCities(event) {
  const citySelect = document.querySelector('select[name=city]')
  const stateInput = document.querySelector('input[name=state]')

  const ufValue = event.target.value

  // Capturando o nome do estado selecionado
  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  // console.log(event.target);
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  // limpando o campo de seleção de cidade
  citySelect.innerHTML = '<option value>Selecione a cidade</option>'
  citySelect.disabled = false

  fetch(url)
    .then(res => res.json())
    .then(cities => {
      for (const city of cities) {
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
      }

      // deixando o campo habilitado
      citySelect.disabled = false
    })

}

// capturando o campo de UF, quando o campo UF é alterado, chama a função getCities
document
  .querySelector('select[name=uf]')
  .addEventListener('change', getCities)

// --------------ITENS DE COLETA ------------

// Pegando todos os LI
const itemsToCollect = document.querySelectorAll('.items-grid li')

for (const item of itemsToCollect) {
  // Evento de clique para cada item
  item.addEventListener('click', handleSelectedItem)
}

const collctedItems = document.querySelector('input[name=items]')
let selectedItems = []

function handleSelectedItem(event) {
  const itemLi = event.target

  // adicionar ou remover uma classe, para marcar como selecionado o item
  itemLi.classList.toggle('selected')

  // capturando o id do elemento clicado
  const itemId = itemLi.dataset.id

  // Verifica se existem items selecionados, e pega os selecionados
  const alreadySelected = selectedItems.findIndex(item => item == itemId)

  // se ja estiver selecionado, tira o item da lista de seleções
  if (alreadySelected >= 0) {
    // tira da seleção
    const filteredItems = selectedItems.filter(item => item != itemId)
    selectedItems = filteredItems
  }
  // Se nao estiver selecionado, adiciona a lista de seleções
  else {
    selectedItems.push(itemId)
  }
  // Atualiza o input hidden de items com os itens selecionados
  collctedItems.value = selectedItems

}