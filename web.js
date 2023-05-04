const images = document.querySelectorAll('.zoom img');

images.forEach(image => {
image.addEventListener('click', () => {
    // do something when an image is clicked, e.g. open a modal or link to a new page
    console.log(`Clicked on ${image.alt}`);
});
});