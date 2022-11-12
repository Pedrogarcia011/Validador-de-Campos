import validator from 'validator'
import './style.css'

const campText = document.querySelector('#value')
const buttonBtn = document.querySelector('#button')
const seletor = document.querySelector('#option')
const result = document.querySelector('#answer')

buttonBtn.addEventListener('click', (event) => {
  event.preventDefault()
  const campo = {
    cpf: validator.isTaxID(campText.value, 'pt-BR'),
    hexColor: validator.isHexColor(campText.value),
    email: validator.isEmail(campText.value),
    uuid: validator.isUUID(campText.value, 4),
    url: validator.isURL(campText.value)
  }
  result.innerHTML = `A válidação retornou ${campo[seletor.value]}`
})
