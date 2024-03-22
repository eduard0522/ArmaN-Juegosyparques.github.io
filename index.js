const d = document;
const $sliderContent = d.querySelectorAll('.slider-e-content');

const $next = d.querySelector('.next');
const $prev = d.querySelector('.prev');

let index = 0;
const mount = () =>{ $sliderContent[index].classList.add('active')};
const unMount = () =>{ $sliderContent[index].classList.remove('active')};

setInterval(() => {
 next()
}, 3000);

$next.addEventListener('click' ,(e) => next() )
$prev.addEventListener('click' , (e) => prev() )

function next() {
  unMount()
  if(index >= $sliderContent.length - 1 ){
    index = 0;
  }else{
    index++
  }
  mount()
}

 function prev () {
 unMount()
  if(index <= 0 ){
    index = $sliderContent.length - 1;
  }else{
    index--
  }
  mount()
}
mount();
