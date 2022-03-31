let button = document.querySelector('button');   
let box = document.getElementById('changeMe');

function changeMe(){
  if(box.style.background == 'red'){
    box.style.background = 'blue';
  } else {
    box.style.background = 'red';
  }
}