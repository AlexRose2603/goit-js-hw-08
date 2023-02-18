// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'simplelightbox/dist/simple-lightbox.min.js';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

function createImgItem(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
        <img 
        class="gallery__image" 
        src="${preview}" 
        alt="${description}"/>
        </a>
        </div>`
    )
    .join('');
}
const preventRedirection = document.querySelector('.gallery');

const addGalleryMarkup = createImgItem(galleryItems);
galleryEl.innerHTML = addGalleryMarkup;

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
