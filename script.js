const images = [
   
    "https://picsum.photos/id/10/1200/900", "https://picsum.photos/id/11/1200/900", "https://picsum.photos/id/12/1200/900", "https://picsum.photos/id/13/1200/900", "https://picsum.photos/id/14/1200/900",
    "https://picsum.photos/id/15/1200/900", "https://picsum.photos/id/16/1200/900", "https://picsum.photos/id/17/1200/900", "https://picsum.photos/id/18/1200/900", "https://picsum.photos/id/19/1200/900",
    
    "https://picsum.photos/id/103/1200/900", "https://picsum.photos/id/122/1200/900", "https://picsum.photos/id/125/1200/900", "https://picsum.photos/id/133/1200/900", "https://picsum.photos/id/142/1200/900",
    "https://picsum.photos/id/145/1200/900", "https://picsum.photos/id/158/1200/900", "https://picsum.photos/id/164/1200/900", "https://picsum.photos/id/180/1200/900", "https://picsum.photos/id/192/1200/900"
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById('lightbox-img').src = images[currentIndex];
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox(e) {
    if (!e || e.target.id === 'lightbox' || e.target.className === 'close') {
        document.getElementById('lightbox').style.display = 'none';
    }
}

function changeImage(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    document.getElementById('lightbox-img').src = images[currentIndex];
}

function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    items.forEach(item => {
        item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
    });
}