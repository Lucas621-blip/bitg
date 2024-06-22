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
        modalImage.src = 'https://cdn.discordapp.com/attachments/793951417312346154/1253815095046443171/Thank_You.jpg?ex=667739cd&is=6675e84d&hm=0ea31919aa71b22889c3ad62f83b5c1f85137146d66e68558729a83f8b5eb32a&';
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
