
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