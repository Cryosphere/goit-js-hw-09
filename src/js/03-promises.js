import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        reject({ position, delay });
        // Reject
      }
    }, delay);
  });
}

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const delay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

  for (let i = 0; i < amount; i++) {
    const position = i+1;
    const promise = createPromise(position, delay + i * step);
    promise.then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
  }
});


function solution(str, ending){
  // TODO: complete
  let rstr = [];
  rstr =[...str];
  let argn = [ ...ending ];
  for(let i=argn.length-1;i>=0;i--){
    if(!argn[i]===rstr[i]){
      console.log(i,argn[i]);
    }
    console.log(i,argn[i],rstr[i]);
  }
  return true;
}
console.log(solution('sumo', 'amo'));
 
