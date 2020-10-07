(()=> {
  const caroussel = document.querySelector('.caroussel');
  const arrImgOfCaroussel = ['../Image/caroussel/img1.jpg', '../Image/caroussel/img2.jpg', '../Image/caroussel/img3.jpg', '../Image/caroussel/img4.jpg', '../Image/caroussel/img5.jpg', '../Image/caroussel/img6.jpg'];

  let index = 0;
  imageAppend(caroussel, (setImg(arrImgOfCaroussel[index])));
  pagination(index, arrImgOfCaroussel, caroussel)

  const paginationEl = document.querySelector('.pagination');
      
  const right = document.querySelector(".caroussel_right");
  const left = document.querySelector(".caroussel_left");
  let timer = setInterval(()=>{
    index = changeImage('right', index, arrImgOfCaroussel, caroussel);
  },3000);
  left.addEventListener('click',e=>{
    clearInterval(timer);
    e.preventDefault();
    index = changeImage('left', index, arrImgOfCaroussel, caroussel);
  });
  right.addEventListener('click', e => {
    clearInterval(timer);
    e.preventDefault();
    index = changeImage('right', index, arrImgOfCaroussel, caroussel);
  });
  for (let i = 0; i < arrImgOfCaroussel.length; i++) {
    paginationEl.children[i].addEventListener('click', e => {
      clearInterval(timer);
      e.preventDefault();
      changeImage('number', i, arrImgOfCaroussel, caroussel)
      console.log(i)
    });
  };
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
      pagination(index);
      return index;
      break;
    case 'right':
      index === arrImg.length - 1 ? index = 0 : index++;
      imageAppend(contain, setImg(arrImg[index]));
      pagination(index);
      return index;
      break;
    case 'number':
      imageAppend(contain, setImg(arrImg[index]));
      pagination(index);
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
  contain.removeChild(contain.lastChild);
  contain.appendChild(img);
}
/**
 * @param {number} index index of pag button to on
 */
function pagination(index) {
  const pagination = document.querySelector('.pagination');
  for(let i=0; i<6; i++) {
    if (pagination.children[i].classList.contains('pag_on')) pagination.children[i].classList.remove('pag_on');
    
  }
  pagination.children[index].classList.add('pag_on')
}

