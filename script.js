var letras = [
    { letra: 'A', palabra: 'Avion', imagen: 'Pictures/Avion.png' },
    { letra: 'B', palabra: 'Barco', imagen: 'Pictures/Barco.png' },
    { letra: 'C', palabra: 'Casa', imagen: 'Pictures/Casa.png' },
    { letra: 'D', palabra: 'Dado', imagen: 'Pictures/Dado.png' },
    { letra: 'E', palabra: 'Elefante', imagen: 'Pictures/Elefante.png' },
    { letra: 'F', palabra: 'Foca', imagen: 'Pictures/Foca.png' },
    { letra: 'G', palabra: 'Gato', imagen: 'Pictures/Gato.png' },
    { letra: 'H', palabra: 'Hipopotamo', imagen: 'Pictures/Hipo.png' },
    { letra: 'I', palabra: 'Iguana', imagen: './pictures/Iguana.jpg' },
    { letra: 'J', palabra: 'Jarra', imagen: './pictures/Jarra.jpg' },
    { letra: 'K', palabra: 'Koala', imagen: './pictures/Koala.jpg' },
    { letra: 'L', palabra: 'Luna', imagen: './pictures/Luna.png' },
    { letra: 'M', palabra: 'Manzana', imagen: './pictures/Manzana.png' },
    { letra: 'N', palabra: 'Naranja', imagen: './pictures/Naranja.png' },
    { letra: 'Ñ', palabra: 'Ñandú', imagen: 'Pictures/ñandu.png' },
    { letra: 'O', palabra: 'Oso', imagen: 'Pictures/oso.png' },
    { letra: 'P', palabra: 'Paleta', imagen: 'Pictures/paleta.png' },
    { letra: 'Q', palabra: 'Queso', imagen: 'Pictures/queso.png' },
    { letra: 'R', palabra: 'Ratón', imagen: 'Pictures/raton.png' },
    { letra: 'S', palabra: 'Sapo', imagen: 'Pictures/sapo.png' },
];

var posicion = 0;

function mostrarLetra() {
    document.getElementById("letra").innerText = letras[posicion].letra;
    document.getElementById("palabra").innerText = letras[posicion].palabra;
    document.getElementById("imagen").src = letras[posicion].imagen;
    document.getElementById("imagen").alt = letras[posicion].palabra;
}

function cambiarColor() {
    const colores = ["red", "blue", "green", "pink"];
    const colorRamdom = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById("card").style.backgroundColor = colorRamdom;
}

function siguiente() {
    posicion++;
    if (posicion >= letras.length) {
        posicion = 0;
    }
    mostrarLetra();
}

function anterior() {
    posicion--;
    if (posicion < 0) {
        posicion = letras.length - 1;
    }
    mostrarLetra();
}

mostrarLetra();

function aplicarColoresAleatorios(elemento) {
    const colores = [
        `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
        `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    ];

    elemento.style.background = `linear-gradient(45deg, ${colores[0]}, ${colores[1]}, ${colores[2]})`;
}

document.querySelectorAll('h1').forEach(h1 => {
    h1.addEventListener('click', () => aplicarColoresAleatorios(h1));
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => aplicarColoresAleatorios(button));
});

