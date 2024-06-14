 
 const galleryContainer = document.querySelector('.gallery-item');
  galleryContainer.addEventListener('click', handlerImageClick);
  galleryContainer.insertAdjacentHTML("afterbegin", createMarkup(images));
  
   function handlerImageClick(event) {
    if (event.target === event.currentTarget) {
        return;
    } //console.log(event.target);
    console.log(target);

   const instance = basicLightbox.create(
     document.querySelector('.gallery-item'));
   instance.show();
}

   function createMarkup(arr) {
    return arr.map(({ preview, original }) => `
        <li class="gallery-item">
  <a class="gallery-link" href="large-image.jpg">
    <img class="gallery-image"
      src="${preview}"
       data-source="${original}"
      alt="Image description"
    />
  </a>
</li> `).join("");
 }
 console.log(createMarkup());