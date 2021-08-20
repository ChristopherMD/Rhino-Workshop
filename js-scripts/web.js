// Coded by ChristopherMD - 2020

const filterItem = document.querySelector('.nav-links');
const filterImg = document.querySelectorAll('.gallery .image');

window.onload = () => {
  filterItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains('nav-link')) {
      filterItem.querySelector('.active').classList.remove('active');
      selectedItem.target.classList.add('active');
      let filterName = selectedItem.target.getAttribute('data-name');
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute('data-name');
        if (filterImges == filterName || filterName == 'all') {
          image.classList.remove('hide');
          image.classList.add('show');
        } else {
          image.classList.remove('show');
          image.classList.add('hide');
        }
      });
    }
  };
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute('onclick', 'preview(this)');
  }
};

const previewBox = document.querySelector('.preview-box');
const catagoryName = document.querySelector('.preview-title p');
const previewImg = document.querySelector('.image-box img');
const closeIcon = document.querySelector('.close-icon');
const shadow = document.querySelector('.preview-shadow');

function preview(element) {
  document.querySelector('body').style.overflow = 'hidden';

  let selectedPrevImg = element.querySelector('img').src;
  let selectedImgCatagory = element.getAttribute('data-type');

  previewImg.src = selectedPrevImg;
  catagoryName.textContent = selectedImgCatagory;
  previewBox.classList.add('show');
  shadow.classList.add('show');
  closeIcon.onclick = () => {
    previewBox.classList.remove('show');
    shadow.classList.remove('show');
    document.querySelector('body').style.overflow = 'auto';
  };
}
