const images = document.querySelectorAll('.blog img');

images.forEach((item) => item.addEventListener('click', zoomImage));
function zoomImage(event) {
  console.log(event.target);
  const imageSrc = event.target.getAttribute('src');
  const template = `
  <div class="lightbox">
  <ion-icon class ='arrow-back' name="arrow-round-back"></ion-icon> 
    <img class="lightbox-image" src= ${imageSrc}  alt="">
    <ion-icon class='arrow-next' name="arrow-round-forward"></ion-icon>
    </div> 
    `;
  document.body.insertAdjacentHTML('beforeend', template);
}
let index = 0;
document.body.addEventListener('click', (e) => {
  const lightImage = document.querySelector('.lightbox-image');
  let lightSrc = '';

  if (e.target.matches('.lightbox')) {
    //remove lightbox
    e.target.parentNode.removeChild(e.target);
  } else if (e.target.matches('.arrow-next')) {
    lightSrc = lightImage.getAttribute('src');
    index = [...images].findIndex(
      (item) => item.getAttribute('src') === lightSrc
    );

    index = index + 1;
    if (index > images.length - 1) index = 0;

    const newSrc = [...images][index].getAttribute('src');
    lightImage.setAttribute('src', newSrc);
    
  } else if (e.target.matches('.arrow-back')) {
    lightSrc = lightImage.getAttribute('src');
    index = [...images].findIndex(
      (item) => item.getAttribute('src') === lightSrc
    );

    index = index - 1;
    if (index < 0) index = images.length - 1;

    const newSrc = [...images][index].getAttribute('src');
    lightImage.setAttribute('src', newSrc);
  }
});
