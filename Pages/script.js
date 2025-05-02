const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

const videos = [
    'Flow - Official Trailer.mp4',
    'moana.mp4',
    'httd.mp4',
    'video4.mp4',
    'video5.mp4'
];

let currentVideoIndex = 0;

function loadVideo(index) {
    videoSource.src = videos[index];
    videoPlayer.load();
}

prevButton.addEventListener('click', () => {
    if (currentVideoIndex > 0) {
        currentVideoIndex--;
        loadVideo(currentVideoIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentVideoIndex < videos.length - 1) {
        currentVideoIndex++;
        loadVideo(currentVideoIndex);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Handle the featured carousel
    const featuredSection = document.querySelector("#featured"); // Use #featured to match the ID
    const slider = featuredSection.querySelector(".carousel");
    const prevBtn = featuredSection.querySelector("#prev"); // Use the correct selector
    const nextBtn = featuredSection.querySelector("#next"); // Use the correct selector
    const dotsContainer = featuredSection.querySelector(".pagination-dots");
    const games = featuredSection.querySelectorAll(".game-card");
    const gamesPerSlide = 3;
    let index = 0;
    const totalSlides = Math.ceil(games.length / gamesPerSlide);

    // Create pagination dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
    }

    function updateSlider() {
        const offset = -(index * 100);
        slider.style.transform = `translateX(${offset}%)`;

        const dots = dotsContainer.querySelectorAll(".dot");
        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");
    }

    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
            updateSlider();
        }
    });

    nextBtn.addEventListener("click", function () {
        if (index < totalSlides - 1) {
            index++;
            updateSlider();
        }
    });
});
