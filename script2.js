document.querySelector('.heart').addEventListener('click', function() {
    document.querySelector('.mail').classList.toggle('active');
});

const audio = document.querySelector('.audio');
const playText = document.querySelector('.play');
const clickHeartText = document.querySelector('.click-heart');

audio.addEventListener('play', () => {
    playText.classList.add('hidden');
    clickHeartText.classList.remove('hidden');
});

