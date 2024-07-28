function addPlace(event) {
    event.preventDefault();

    const placeName = document.getElementById('place-name').value;
    const placeDescription = document.getElementById('place-description').value;

    if (placeName && placeDescription) {
        const placeItem = document.createElement('div');
        placeItem.classList.add('place-item');

        const placeTitle = document.createElement('h3');
        placeTitle.textContent = placeName;

        const placeDesc = document.createElement('p');
        placeDesc.textContent = placeDescription;

        placeItem.appendChild(placeTitle);
        placeItem.appendChild(placeDesc);

        document.getElementById('places-list').appendChild(placeItem);

        // Limpiar el formulario
        document.getElementById('place-form').reset();
    }
}
