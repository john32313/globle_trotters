(()=> {
  const caroussel = document.querySelector('.caroussel');
  const arrImgOfCaroussel = ['../Image/caroussel/img1.jpg', '../Image/caroussel/img2.jpg', '../Image/caroussel/img3.jpg', '../Image/caroussel/img4.jpg', '../Image/caroussel/img5.jpg', '../Image/caroussel/img6.jpg'];

  let index = 0;
  imageAppend(caroussel,(setImg(arrImgOfCaroussel[index])));
  
  const right = document.querySelector(".caroussel_right");
  const left = document.querySelector(".caroussel_left");
  let timer = setInterval(()=>{
    index = changeImage('right', index, arrImgOfCaroussel, caroussel);
  },1500);
  left.addEventListener('click',e=>{
    clearInterval(timer);
    e.preventDefault();
    console.log('left');
    index = changeImage('left', index, arrImgOfCaroussel, caroussel);
  });
  right.addEventListener('click', e => {
    clearInterval(timer);
    e.preventDefault();
    console.log('right');
    index = changeImage('right', index, arrImgOfCaroussel, caroussel);
  });
})()

/**
 * @param {string} url path of img 
 * @return {Object} div+img tag 
 */
function setImg(url) {
  const div = document.createElement('div');
  div.classList.add('image_article');
  const img = document.createElement('img');
  img.setAttribute('src', url);
  img.setAttribute('alt', url);

  div.appendChild(img);
  return div;
};

/**
 * @param {string} direction 'right' or 'left'
 * @param {number} index img actually index on array
 * @param {Object[]} arrImg array of each img's path
 * @param {Object} contain div caroussel
 */
function changeImage(direction, index, arrImg, contain) {
  switch (direction) {
    case 'left':
      index===0 ? index = arrImg.length-1 : index--;
      imageAppend(contain, setImg(arrImg[index]));
      return index;
      break;
    case 'right':
      index === arrImg.length - 1 ? index = 0 : index++;
      imageAppend(contain, setImg(arrImg[index]));
      return index;
      break;
    default:
      console.error('wrong parameters direction');
      break;
  }
}
/**
 * @param {Object} contain div caroussel
 * @param {Object} img img to append in carousel
 */
function imageAppend(contain, img) {

  console.log(typeof contain)
  contain.removeChild(contain.lastChild);
  contain.appendChild(img);
}

