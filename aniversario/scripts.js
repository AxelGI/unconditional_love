const phrases = [
    "Cada día a tu lado es una nueva aventura.",
    "Eres mi razón de sonreír cada mañana.",
    "Juntos somos invencibles."
    // Añade más frases según sea necesario
];

function showPhrase(index) {
    const overlay = document.getElementById('overlay');
    const phraseText = document.getElementById('phrase-text');
    phraseText.textContent = phrases[index];
    overlay.style.display = 'flex';
}

function hidePhrase() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

function toggleMenu() {
    const menuItems = document.getElementById('menu-items');
    if (menuItems.style.display === 'none' || !menuItems.style.display) {
        menuItems.style.display = 'flex';
    } else {
        menuItems.style.display = 'none';
    }
}
