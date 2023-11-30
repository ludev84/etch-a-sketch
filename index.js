const container = document.querySelector('.container');
const newBtn = document.querySelector('#new_grid');

let num = 16;
let num2 = num * num;

for(let i = 0; i < num2 ; i++) {
  const square = document.createElement('div');
  square.classList.toggle('square');
  square.innerHTML = '&nbsp;';
  container.appendChild(square);
}

let grid = document.querySelectorAll('.square');

grid.forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.classList.add('painted');
  })
});

newBtn.addEventListener('click', function() {
  let number = +prompt('Número de lados de nueva cuadrícula:');
  if (Number.isInteger(number) && number <= 100 && number > 0) {
    let number2 = number * number;

    // Eliminar cada cuadro actual
    grid.forEach(element => {
      element.remove();
    });

    // Re hacer la rejilla
    for(let i = 0; i < number2 ; i++) {
      const square = document.createElement('div');
      square.classList.toggle('square');
      square.innerHTML = '&nbsp;';
      container.appendChild(square);
    }
    grid = document.querySelectorAll('.square');
    grid.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.classList.add('painted');
      })
    });

    grid.forEach(square => {
      square.background = 'black';
      square.style.flexBasis = `calc(720px / ${number})`;
      square.style.height = `calc(720px / ${number})`;
      square.classList.remove('painted');
    });
  } else alert('Wrong input');
});