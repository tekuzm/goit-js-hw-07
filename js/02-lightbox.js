import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryEls = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<li><a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
      </a></li>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryEls);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});
