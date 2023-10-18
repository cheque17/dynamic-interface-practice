import "./style.css";


document.querySelector('.trigger').addEventListener('click', () => {
  document.querySelector('.dropdown').classList.toggle('active');
})