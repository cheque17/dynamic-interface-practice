import "./style.css";

document.querySelector(".trigger").addEventListener("click", () => {
  document.querySelector(".dropdown").classList.toggle("active");
});

function changeImage (imagesNode, currentImage, newIndexNumber) {
  const target = imagesNode;
  target[currentImage].classList.toggle('showing');
  target[newIndexNumber].classList.toggle('showing')
}


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

console.log(images);
