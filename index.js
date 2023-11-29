const container = document.querySelector('.container');

let num = 16;

for(let i = 0; i < num ; i++) {
  const row = document.createElement('div');
  row.classList.toggle('row');
  for(let i = 0; i < num; i++) {
    const square = document.createElement('div');
    square.classList.toggle('square');
    row.appendChild(square);
  }
  container.appendChild(row);
};