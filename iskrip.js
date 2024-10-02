// Get elements
const clickMeIcon = document.getElementById('click-me-icon');
const firstPage = document.getElementById('first-page');
const giftPage = document.getElementById('gift-page');
const finalPage = document.getElementById('final-page');
const giftMessage = document.getElementById('gift-message');
const giftImage = document.getElementById('gift-image');
const giftMusic = document.getElementById('gift-music');
const blingSound = document.getElementById('bling-sound');

// Gifts data
const gifts = [
    { name: "bouquet of flowers", image: "plawers.gif" },
    { name: "love letter", image: "labletter.png" },
    { name: "love letter with flowers", image: "letterwflowers.png" }
];

// Event listener for click on the click-me icon
clickMeIcon.addEventListener('click', () => {
    // Start fade-out animation
    clickMeIcon.classList.add('fade-out');
    
    // Play bling sound on transition
    blingSound.play();
    
    // Transition to gift page after fade-out
    setTimeout(() => {
        firstPage.classList.add('hidden');
        showGift();
    }, 1000);
});

// Function to show the random gift
function showGift() {
    // Randomly select a gift
    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    
    // Update gift message and image
    giftMessage.textContent = `Wow meron kang ${randomGift.name}!`;
    giftImage.src = randomGift.image;
    
    // Show gift page and play music
    giftPage.classList.remove('hidden');
    giftMusic.play();
    
    // Hide gift after 15 seconds or on click
    setTimeout(showFinalPage, 15000);
    giftPage.addEventListener('click', showFinalPage);
}

// Function to transition to the final page
function showFinalPage() {
    giftPage.classList.add('hidden');
    finalPage.classList.remove('hidden');
}
