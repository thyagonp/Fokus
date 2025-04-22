const html = document.querySelector('html');
const focuBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const imageBanner = document.querySelector('.app__image');
const btnStyle = document.querySelectorAll('.app__card-button')
const timeInScreen = document.querySelector('#timer')

const title = document.querySelector('.app__title');
const timer = document.querySelector('.app__card-primary-button');
const sound = document.querySelector('#alternar-musica');

const startBtn = document.querySelector('#start-pause');
const startOrPauseBtn = document.querySelector('#start-pause span');

const music = new Audio('./sons/luna-rise-part-one.mp3');
const playSound = new Audio('./sons/play.wav')
const pauseSound = new Audio('./sons/pause.mp3')
const timesUp = new Audio('./sons/beep.mp3')


const icon = document.querySelector('.app__card-primary-butto-icon')

let intervalId = null;
let timeInSeconds = 1500

startBtn.addEventListener('click', startOurPause )

function startOurPause() {
  if(intervalId) {
    pauseSound.play()
    zerar()
    return
  }
  playSound.play()
  intervalId = setInterval(count, 1000)
  icon.setAttribute('src', './imagens/pause.png')
  startOrPauseBtn.textContent = 'Pausar'
}

const count = () => {
  if(timeInSeconds <= 0){
    timesUp.play()
    alert('tempo esgotado');
    zerar()
    return
  }
  timeInSeconds -= 1
  mostrarTempo()
  console.log('tempo:' + timeInSeconds)
  console.log('Id: ' + intervalId)
}

function zerar() {
  clearInterval(intervalId)
  icon.setAttribute('src', './imagens/play_arrow.png')
  startOrPauseBtn.textContent = 'Começar'
  intervalId = null
}

music.loop = true;

sound.addEventListener('change', ()=> {
  if(music.paused) {
    music.play()
  } else {
    music.pause()
  }
});

focuBtn.addEventListener('click', () => {
  timeInSeconds = 1500
 alterarContexto('foco');
});

curtoBtn.addEventListener('click', () => {
  timeInSeconds = 300
  alterarContexto('descanso-curto');
});

longoBtn.addEventListener('click', () => {
  timeInSeconds = 900
  alterarContexto('descanso-longo');
});

timer.addEventListener('click', ()=> {
})

function mostrarTempo() {
  const tempo = new Date(timeInSeconds * 1000)
  const tempoFormatado = tempo.toLocaleString('pt-br', {minute: '2-digit', second: '2-digit'})
  timeInScreen.innerHTML = `${tempoFormatado}`
}

mostrarTempo()

function alterarContexto(contexto) {
  html.setAttribute('data-contexto', contexto)
  imageBanner.setAttribute('src', `./imagens/${contexto}.png`)
  btnStyle.forEach(function(contexto){
    contexto.classList.remove('active')
  })
  mostrarTempo()

  // title.setAttribute()
  switch(contexto) {
    case 'foco':
      title.innerHTML = `<p>Otimize sua produtividade,</p> <strong class="app__title-strong">mergulhe no que importa</strong>`
      focuBtn.classList.add('active');      
      break;
    case 'descanso-curto':
      title.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`
      curtoBtn.classList.add('active');
      break;
    case 'descanso-longo':
      title.innerHTML = `Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>`
      longoBtn.classList.add('active');
      break;
    default:
      break;
  }
}