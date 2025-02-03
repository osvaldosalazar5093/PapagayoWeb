function loadSlider(objectSelected) {
    const ObjectSelectedLocalStorage = JSON.parse(localStorage.getItem(objectSelected));
    const carouselInner = document.querySelector('#slider .carousel-inner');

    if (ObjectSelectedLocalStorage) {
        // Obtener todas las propiedades del objeto que comiencen con "image"
        const images = Object.keys(ObjectSelectedLocalStorage)
            .filter(key => key.startsWith('image'))
            .map(key => ObjectSelectedLocalStorage[key]);

        // Filtrar las imágenes válidas para eliminar las que sean undefined o null
        const validImages = images.filter(image => image);

        // Verificar si solo hay una imagen válida
        if (validImages.length === 1) {
            // Repetir la imagen única para las imágenes 2 y 3
            for (let i = 1; i < images.length; i++) {
                images[i] = validImages[0];
            }
        }

        images.forEach((src, index) => {
            const div = document.createElement('div');
            div.classList.add('carousel-item');
            if(index === 0) div.classList.add('active'); // Asegúra de que el primer ítem sea activo

            const img = document.createElement('img');
            img.src = src;
            img.classList.add('d-block', 'w-100', 'responsive-slider-img');
            img.alt = `Slide ${index + 1}`;

            div.appendChild(img);
            carouselInner.appendChild(div);
        });
    }
}
