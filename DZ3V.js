const prNum = Math.floor(Math.random() * 15 + 1)
console.log(prNum)
const out = document.getElementById("out")
let count = 3
let quan = document.getElementById('quantity')
quan.innerHTML = 3

function check() {
  quan.innerHTML = count - 1
  count--
  let num = parseInt(document.getElementById("myn").value)

  if (num > prNum && count !== 0) {
    out.innerHTML = "Загаданное число меньше"
  } else if (num < prNum && count !== 0) {
    out.innerHTML = "Загаданное число больше"
  } else if (num === prNum) {
    alert('Ура! Вы угадали! Страница будет перезагружена')
    location.reload()
  } else {
    alert('Вы не угадали и исчерпали попытки! Страница будет перезагружена')
    location.reload()
  }
  $('#myn').val('')
}