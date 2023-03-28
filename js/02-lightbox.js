import { galleryItems } from './gallery-items.js';


const galleryList = document.querySelector(".gallery");

const galleryItemsMarkup = createGallery(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class = "gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>
   `;
    })
    .join("");
}

const lightbox = new SimpleLightbox('.gallery__item a', {captionsData: 'alt', fadeSpee: '250'});
