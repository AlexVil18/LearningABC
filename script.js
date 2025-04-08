var letras = [
    { letra: 'A', palabra: 'Avion', imagen: 'Pictures/Avion.png' },
    { letra: 'B', palabra: 'Barco', imagen: 'Pictures/Barco.png' },
    { letra: 'C', palabra: 'Casa', imagen: 'Pictures/Casa.png' },
    { letra: 'D', palabra: 'Dado', imagen: 'Pictures/Dado.png' },
    { letra: 'E', palabra: 'Elefante', imagen: 'Pictures/Elefante.png' },
    { letra: 'F', palabra: 'Foca', imagen: 'Pictures/Foca.png' },
    { letra: 'G', palabra: 'Gato', imagen: 'Pictures/Gato.png' },
    { letra: 'H', palabra: 'Hipopotamo', imagen: 'Pictures/Hipo.png' },
  ];
  
  var posicion = 0;
  
  function mostrarLetra() {
    document.getElementById("letra").innerText = letras[posicion].letra;
    document.getElementById("palabra").innerText = letras[posicion].palabra;
    document.getElementById("imagen").src = letras[posicion].imagen;
    document.getElementById("imagen").alt = letras[posicion].palabra;
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
  