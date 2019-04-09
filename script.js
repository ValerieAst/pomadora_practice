
const form = document.querySelector('form')

function startTimer(e) {
  e.preventDefault()

  const input = e.target.querySelector('input')
  console.log('event: ', input)
}

form.onsubmit = startTimer
