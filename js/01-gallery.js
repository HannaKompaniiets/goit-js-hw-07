import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const galleryItemsMarkup = createGallery(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </li> 
        `;
    })
    .join("");
}


galleryList.addEventListener("click", getFullSizeImage);

function getFullSizeImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }

    const isClickedImage = event.target.classList.contains("gallery__image");
    if (!isClickedImage) {
        return ;
    }

    const source = event.target.dataset.source;

    const openModal = basicLightbox.create(`<img width="1400" height="900" src="${source}">`);
    openModal.show();

    window.addEventListener("keydown", (event) => onEscImage(event, openModal));
}

function closeModalImg(openModal) {
    window.removeEventListener("keydown", onEscImage);
    openModal.close();
}

function onEscImage(event, openModal){
    if (event.code === 'Escape'){
        closeModalImg(openModal)
    }
}
