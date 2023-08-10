let counter = document.querySelector('.indicator');
let buttonPlus = document.querySelector('.volume-up');
let buttonMinus = document.querySelector('.volume-down');
let volumeRect = Array.from(document.querySelectorAll('.volume-rect'));

let i = 0;

buttonPlus.onclick = () => {
  if(counter.textContent >= 0 && counter.textContent < 10) {
    counter.textContent++;
    volumeRect[i].classList.add('volume-rect__active');
    i++;
  }
}

buttonMinus.onclick = () => {
  if(counter.textContent > 0) {
    counter.textContent--;
    i--;
    volumeRect[i].classList.remove('volume-rect__active');
  }
}
