import '../scss/app.scss';
import { gsap } from 'gsap'
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
  let wheelTween;
  let bgTween;

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
  function rotateWheels(){
    if (wheelTween){
      wheelTween.resume()
    } else {
      gsap.set('.platisca-2', {transformOrigin: '50% 50%'});
      wheelTween = gsap.to('.platisca-2', {rotation: 360, duration: 1, repeat:-1, ease: 'none'});
    }
  }

  function stopWheels(){
    wheelTween.pause()
  }

  function moveBg(){
    if (bgTween){
      bgTween.resume()
    } else {
      bgTween = gsap.to('.bg img', {x: -4000, duration: 10, repeat:-1, ease: 'none'});
    }
  }

  function stopBg(){
    bgTween.pause()
  }

  return {
    init: function(callback){
      colorTimer = setInterval(() => {
        changeCarColor()
      }, colorTimeChange);
      animateText(callback)
    },
    play: function(){
      clearInterval(colorTimer);
      rotateWheels();
      moveBg();
    },
    stop: function(){
      stopWheels();
      stopBg();
      changeCarColor();
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


