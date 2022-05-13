import '../scss/app.scss';

/**
 *  USING MODULE PATTERN
 */
const myAnimation = (() => {
  const colors = ['Crimson', 'Coral', 'DarkCyan', 'Indigo', 'DeepSkyBlue', 'LightSeaGreen']
  let colorInd = 0;
  let colorTimer;
  const colorTimeChange = 1000; 
  const title = document.querySelector('h1');
  const carColor = document.getElementById('barva');

  /**
   * ANIMATING TEXT
   * @param {function} callback function to run after text animation
   */
  function animateText(callback){
    // Transform to array
    let greetings = title.innerText.split('');
    // Replay init text and replace it with wrap characters
    title.innerHTML = '';
    greetings.forEach(char => {
      const span = document.createElement('span');
      span.innerText = char;
      title.appendChild(span)
    })
    // Animate Characters
    const characters = title.querySelectorAll('span');
    characters.forEach((e, i) => {
      setTimeout(() => {
        e.classList.add('active');
        if (i === characters.length - 1) callback()
      },  (i + 1) * 250 )
    })
  }

  function changeCarColor(){
    colorInd = (colorInd + 1) % colors.length;
    carColor.style.transition = 'fill ease-in-out 2s';
    carColor.style.fill = colors[colorInd];
    //console.log(colorInd)
  }

  return {
    init: function(callback){
      colorTimer = setInterval(() => {
        changeCarColor()
      }, colorTimeChange);
      animateText(callback)
    },
    play: function(){
      clearInterval(colorTimer)
    },
    stop: function(){
      changeCarColor()
      colorTimer = setInterval(() => {
        changeCarColor()
      }, colorTimeChange);
    }
  }

})();

const btn =  document.querySelector('.btn');
let active = false;

window.addEventListener('DOMContentLoaded', () => myAnimation.init(() => btn.style.opacity = 1 ));
btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  if (active) {
    myAnimation.stop();
    active = false;
  } else {
    myAnimation.play();
    active = true;
  }
})


