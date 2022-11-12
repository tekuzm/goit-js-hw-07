import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryList = document.querySelector(".gallery");

const galleryEls = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryEls);
galleryList.addEventListener("click", onClickGalleryList);

let instance;

function onClickGalleryList(e) {
  e.preventDefault();
  const isImageEl = e.target.classList.contains("gallery__image");

  if (!isImageEl) {
    return;
  }

  const imageUrl = e.target.dataset.source;

  instance = basicLightbox.create(
    `
		<img src="${imageUrl}">`,
    {
      onShow: () => window.addEventListener("keydown", onEscKeyPress),
      onClose: () => window.addEventListener("keydown", onEscKeyPress),
    }
  );

  instance.show();
}

function onEscKeyPress(e) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = e.code === ESC_KEY_CODE;

  if (isEscKey) {
    instance.close();
  }
}
