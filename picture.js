const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalLocation = document.getElementById('modal-location');
const modalButton = document.getElementById('modal-button');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    modal.style.visibility = 'visible';
    modalImage.src = item.querySelector('img').src;
    modalTitle.textContent = item.querySelector('.title').textContent;
    modalDescription.textContent = item.querySelector('img').getAttribute('data-description');
    modalLocation.textContent = item.querySelector('.description').textContent;
  })
})

modalButton.addEventListener('click', () => {
  modal.style.visibility = 'hidden';
});
