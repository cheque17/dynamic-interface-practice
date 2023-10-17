import "./style.css";

const trigger = document.querySelector('.trigger');
console.log(trigger)

const list = document.querySelector('.dropdown');
console.log(list)

trigger.addEventListener('click', () => {
  list.classList.toggle('active');
})