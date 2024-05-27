const photos = ["https://images.unsplash.com/photo-1497294815431-9365093b7331?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"];
let currentIndex = 0;

function displayPhoto() {
    const imgElement = document.getElementById('slideshow-image');
    imgElement.src = photos[currentIndex];
}

function nextPhoto() {
    currentIndex = (currentIndex + 1) % photos.length;
    displayPhoto();
}

function prevPhoto() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    displayPhoto();
}

document.getElementById('next').addEventListener('click', nextPhoto);
document.getElementById('prev').addEventListener('click', prevPhoto);

window.onload = displayPhoto;
