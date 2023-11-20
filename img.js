function zoom(event) {
    const contenedor = document.querySelector('.contenedorImg');
    const imagen = document.querySelector('.imgProduc');

    const contenedorRect = contenedor.getBoundingClientRect();
    const mouseX = event.clientX - contenedorRect.left;
    const mouseY = event.clientY - contenedorRect.top;

    const scaleValue = 2; // Puedes ajustar este valor según la cantidad de zoom deseada

    const translateX = (contenedorRect.width / 2 - mouseX) * (scaleValue - 1);
    const translateY = (contenedorRect.height / 2 - mouseY) * (scaleValue - 1);

    imagen.style.transform = `scale(${scaleValue}) translate(${translateX}px, ${translateY}px)`;
}

function resetZoom() {
    const imagen = document.querySelector('.imgProduc');
    imagen.style.transform = 'scale(1) translate(0, 0)';
}

const contenedor = document.querySelector('.contenedorImg');
contenedor.addEventListener('mouseleave', resetZoom);