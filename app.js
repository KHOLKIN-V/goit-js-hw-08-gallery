const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox__image');
const lightboxBtn = document.querySelector('.lightbox__button');
const activeLightbox = document.querySelector('.is-open');
const backdrop = document.querySelector('.lightbox__overlay');

const galleryImgs = galleryItems.map(e => {
  const galleryItem = document.createElement('li');
  galleryItem.setAttribute('class', 'gallery__item');
  const galleryLink = document.createElement('a');
  galleryLink.setAttribute('href', e.original);
  galleryLink.setAttribute('class', 'gallery__link');
  const galleryImg = document.createElement('img');
  galleryImg.setAttribute('src', e.preview);
  galleryImg.setAttribute('data-source', e.original);
  galleryImg.setAttribute('alt', e.description);
  galleryImg.setAttribute('class', 'gallery__image');
  gallery.appendChild(galleryItem);
  galleryItem.appendChild(galleryLink);
  galleryLink.appendChild(galleryImg);
  return;
});

gallery.addEventListener('click', onClick);
lightboxBtn.addEventListener('click', onCloseModal);
backdrop.addEventListener('click', onCloseBackdrop);



function onClick(e) {
  window.addEventListener('keydown', onCloseEsc);

  if(e.target.nodeName != 'IMG') {
    return;
  };
  e.preventDefault();

  lightbox.classList.add('is-open');
  lightboxImg.setAttribute('src', e.target.dataset.source);
  lightboxImg.setAttribute('alt', e.target.description);
};

function onCloseModal() {
  window.removeEventListener('keydown', onCloseEsc);

  lightbox.classList.remove('is-open');
  lightboxImg.removeAttribute('src');
  lightboxImg.removeAttribute('alt');
};

function onCloseBackdrop (e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  };
};

function onCloseEsc (e) {
  console.log(e.code);
  if (e.code === 'Escape') {
  onCloseModal();
  };
};