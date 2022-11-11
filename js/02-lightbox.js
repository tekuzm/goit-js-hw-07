import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryEls = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
      </a>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryEls);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
