var letras = [
    { letra: 'I', palabra: 'Iguana', imagen: './pictures/Iguana.jpg' },
    { letra: 'J', palabra: 'Jarra', imagen: './pictures/Jarra.jpg' },
    { letra: 'K', palabra: 'Koala', imagen: './pictures/Koala.jpg' },
    { letra: 'L', palabra: 'Luna', imagen: './pictures/Luna.png' },
    { letra: 'M', palabra: 'Manzana', imagen: './pictures/Manzana.png' },
    { letra: 'N', palabra: 'Naranja', imagen: './pictures/Naranja.png' },
  ];
  
  var posicion = 0;
  
  function mostrarLetra() {
    document.getElementById("letra").innerText = letras[posicion].letra;
    document.getElementById("palabra").innerText = letras[posicion].palabra;
    document.getElementById("imagen").src = letras[posicion].imagen;
    document.getElementById("imagen").alt = letras[posicion].palabra;
  }

  function cambiarColor() {
    const colores = ["red","blue", "green","pink"]
    const colorRamdom = colores[Math.floor(Math.random()* colores.length)]
    document.getElementById("card").style.backgroundColor = colorRamdom
  }
  
  function siguiente() {
    posicion = posicion + 1;
    if (posicion >= letras.length) {
      posicion = 0;
    }
    mostrarLetra();
  }
  
  function anterior() {
    posicion = posicion - 1;
    if (posicion < 0) {
      posicion = letras.length - 1;
    }
    mostrarLetra();
  }
  
  mostrarLetra();
  