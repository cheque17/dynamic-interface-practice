
function changeImage (imagesNode, currentImage, newIndexNumber) {
  const target = imagesNode;
  target[currentImage].classList.toggle('showing');
  target[newIndexNumber].classList.toggle('showing');
}

export default changeImage;
