const phrases = [
    "Cada día a tu lado es una nueva aventura.",
    "Me encanta ser un niño contigo y reirnos de todo",
    "Ser fashion de las mejores cosas que pude adquirir de ti",

    "¡El mejor cumpleaños de la vida!",
    "Por mas visitas a la cineteca y fumadas",
    "Yo no pedí nada porque ya me dio todo santa con esta muñecota ❤",

    "Gracias por presentarme a ese nene hermoso!!",
    "Por las partidas intensas y divertidas",
    "Amo las excelentes citas y comidas",

    "Gracias por hacerme reír y por aguantar mis osos",
    "Me encanta sentirte y tomarnos fotos",
    "Pensar que todo fue tan rápaido y bonito, llegaste justo a tiempo",
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
