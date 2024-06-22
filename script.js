document.getElementById('imageButton').onclick = function() {
    showModal('image');
};

document.getElementById('videoButton').onclick = function() {
    showModal('video');
};

document.getElementById('closeModal').onclick = function() {
    closeModal();
};

function showModal(type) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');

    if (type === 'image') {
        modalImage.src = 'https://i.imgur.com/iXT9roc.jpg';
        modalImage.style.display = 'block';
        modalVideo.style.display = 'none';
    } else if (type === 'video') {
        modalVideo.src = 'https://www.youtube.com/embed/JUlRJvKwgL4';
        modalVideo.style.display = 'block';
        modalImage.style.display = 'none';
    }

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');

    modal.style.display = 'none';
    modalImage.src = '';
    modalVideo.src = ''; // Pode ser desnecessário dependendo da implementação do elemento video
}
