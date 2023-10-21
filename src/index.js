import "./style.css";
import changeImage from './DOM-manipulation'

document.querySelector(".trigger").addEventListener("click", () => {
  document.querySelector(".dropdown").classList.toggle("active");
});


const images = document.querySelectorAll(".image-display");

let currentImage = 0;

document.querySelector("#previous").addEventListener("click", () => {
  if (currentImage === 0) {
    const nextImgIndex = 3;
    changeImage(images, currentImage, nextImgIndex);
    currentImage = nextImgIndex;
  } else {
    const nextImgIndex = currentImage - 1;
    changeImage(images, currentImage, nextImgIndex);
    currentImage = nextImgIndex;
  }
});

document.querySelector('#next').addEventListener('click', () => {
  if (currentImage === 3){
    const newIndexNumber = 0;
    changeImage(images, currentImage, newIndexNumber);
    currentImage = newIndexNumber;
  } else {
    const newIndexNumber = currentImage + 1;
    changeImage(images, currentImage, newIndexNumber);
    currentImage = newIndexNumber;
  }
})

document.querySelectorAll('.dot').forEach((button) =>{
  button.addEventListener('click', (e) => {
    const newIndexNumber = Number(e.target.attributes.name.value.slice(-1));
    changeImage(images,currentImage, newIndexNumber);
    currentImage = newIndexNumber;
  })
})

function slideAutomatically () {
  let newIndexNumber = currentImage + 1;
  if (newIndexNumber > 3){
    newIndexNumber = 0;
  }
  changeImage(images, currentImage, newIndexNumber);
  currentImage = newIndexNumber;

  setTimeout(slideAutomatically, 5000);
}

slideAutomatically();
