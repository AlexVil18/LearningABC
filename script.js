var letras = [
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
  