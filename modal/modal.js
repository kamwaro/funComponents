const btn = document.querySelector('.btn');
const card = document.querySelector('.card');
const remove = document.querySelector('.remove');

btn.addEventListener('click', (e) => {
  console.log(e);
  console.log('Button clicked!!');

  card.classList.remove('vanish');
  console.log(card.classList);
});

remove.addEventListener('click', (e) => {
  console.log(e);

  card.classList.add('vanish');
  card.classList.remove('show');
  console.log(card.classList);
});
