let letras = [
    { letra: 'T', palabra: 'tomate', imagen: 'Pictures/tomate.png' },
    { letra: 'U', palabra: 'uvas', imagen: 'Pictures/uvas.jpg' },
    { letra: 'V', palabra: 'vaca', imagen: 'Pictures/vaca.jpg' },
    { letra: 'W', palabra: 'wifi', imagen: 'Pictures/wifi.jpg' },
    { letra: 'X', palabra: 'xilofono', imagen: 'Pictures/xilofono.jpg' },
    { letra: 'Y', palabra: 'yuca', imagen: 'Pictures/yuca.jpg' },
    { letra: 'Z', palabra: 'zapato', imagen: 'Pictures/zapato.jpg' },
  ];
  
  let posicion = 0;
  
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
  