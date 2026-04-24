// 1. Theme Logic (6AM - 6PM)
function updateTheme() {
    const hour = new Date().getHours();
    const body = document.body;

    // Default auto-theme
    if (hour >= 6 && hour < 18) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.add('dark-mode');
    }
}

// 2. Interactive Pet Logic
const pet = document.querySelector('.pet-sprite');
const petStatus = document.querySelector('.pet-status');

pet.addEventListener('mouseover', () => {
    pet.style.transform = 'scale(1.2) rotate(-10deg)';
    petStatus.innerText = "Hey! Let's work!";
});

pet.addEventListener('mouseleave', () => {
    pet.style.transform = 'scale(1) rotate(0deg)';
    petStatus.innerText = "Zzz...";
});

// 3. Simple Coin Animation on Click
document.querySelectorAll('.main-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        let count = document.getElementById('coin-count');
        let current = parseInt(count.innerText);
        count.innerText = current + 10; // Gain 10 coins
        
        // Trigger smooth transition effect
        console.log("Navigating to Profile...");
    });
});

// Initialize
updateTheme();
