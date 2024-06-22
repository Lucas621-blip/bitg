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
        modalImage.src = 'https://cdn.discordapp.com/attachments/793951417312346154/1253911822512291931/Thank_You.jpg?ex=667793e3&is=66764263&hm=66c47f92e8676b2597243e1128ada78dcf1b355aea46dd5703730c8252e8a338&';
        modalImage.style.display = 'block';
        modalVideo.style.display = 'none';
    } else if (type === 'video') {
        modalVideo.src = 'https://www.youtube.com/embed/zxAUiPP-EYY?autoplay=1';
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
    modalVideo.src = '';
}
