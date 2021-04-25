let games = document.querySelectorAll('.game')
let gimes = document.querySelectorAll('.gime')
let gameBTN = document.querySelector('.botaoGames')
let gimeBTN = document.querySelector('.botaoGimes')

gameBTN.addEventListener('click', function(){
  games.forEach(element => {
    if(element.classList.contains('hide'))
      element.classList.remove('hide')
    else 
      element.classList.add('hide')
  });
})

gimeBTN.addEventListener('click', function(){
  gimes.forEach(elementoGime => {
    if(elementoGime.classList.contains('hide'))
      elementoGime.classList.remove('hide')
    else
      elementoGime.classList.add('hide')
  })
})