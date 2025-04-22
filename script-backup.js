const html = document.querySelector('html');
const focuBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const imageBanner = document.querySelector('.app__image');
const btnStyle = document.querySelectorAll('.app__card-button')

const title = document.querySelector('.app__title');
const timer = document.querySelector('.app__card-primary-button');
const sound = document.querySelector('#alternar-musica');
const music = new Audio('./sons/luna-rise-part-one.mp3')

music.loop = true;

sound.addEventListener('change', ()=> {
  if(music.paused) {
    music.play()
  } else {
    music.pause()
  }
});

focuBtn.addEventListener('click', () => {
 alterarContexto('foco');
});

curtoBtn.addEventListener('click', () => {
  alterarContexto('descanso-curto');
});

longoBtn.addEventListener('click', () => {
  alterarContexto('descanso-longo');
  
});

timer.addEventListener('click', ()=> {
})

function alterarContexto(contexto) {
  html.setAttribute('data-contexto', contexto)
  imageBanner.setAttribute('src', `./imagens/${contexto}.png`)
  btnStyle.forEach(function(contexto){
    contexto.classList.remove('active')
  })

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

  // Outra alternativa para não precisar usar switch case: 
  // if(contexto === 'foco') {
  //   title.innerHTML = `<p>Otimize sua produtividade,</p> <strong class="app__title-strong">mergulhe no que importa</strong>`
  //   focuBtn.classList.add('active');  
  // } if (contexto === 'descanso-curto') {
  //   title.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`
  //   curtoBtn.classList.add('active');
  // } else {
  //   title.innerHTML = `Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>`
  //   longoBtn.classList.add('active');
  // }
}