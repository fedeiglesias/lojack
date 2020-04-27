var futura = { src: './lib/js/sifr/swf/sifr.swf' };
var miryad = { src: './lib/js/sifr/swf/miryad.swf' };

sIFR.activate(futura);
sIFR.activate(miryad);

sIFR.replace(futura, {
  selector: '#kilometros-totales h1'
  ,css: {
    '.sIFR-root': { 'color': '#ffae00', 'font-size': '14px', 'display':'block', 'float':'left', 'text-align': 'right', 'width':'100px' }
  }
  ,wmode: 'transparent'
});

sIFR.replace(futura, {
  selector: '#kilometros-parciales h1'
  ,css: {
    '.sIFR-root': { 'color': '#ffae00', 'font-size': '14px', 'display':'block', 'float':'left', 'text-align': 'right', 'width':'100px' }
  }
  ,wmode: 'transparent'
});

sIFR.replace(futura, {
  selector: '#panel-lcd h1'
  ,css: {
    '.sIFR-root': { 'color': '#00f0ff', 'font-size': '13px', 'display':'block', 'float':'left', 'text-align': 'right', 'width':'100px' }
  }
  ,wmode: 'transparent'
});

/*Todos los textos de myriad*/
sIFR.replace(miryad, {
  selector: '#vehiculo h1'
  ,css: {
    '.sIFR-root': { 'color': '#363636', 'font-size': '11px', 'display':'block', 'float':'left', 'text-align': 'left', 'width':'100px', 'text-transform':'uppercase'}
  }
  ,wmode: 'transparent'
});


sIFR.replace(miryad, {
  selector: '#chofer h1'
  ,css: {
    '.sIFR-root': { 'color': '#363636', 'font-size': '11px', 'display':'block', 'float':'left', 'text-align': 'left', 'width':'100px', 'text-transform':'uppercase'}
  }
  ,wmode: 'transparent'
});


sIFR.replace(miryad, {
  selector: '#patente h1'
  ,css: {
    '.sIFR-root': { 'color': '#363636', 'font-size': '11px', 'display':'block', 'float':'left', 'text-align': 'left', 'width':'100px', 'text-transform':'uppercase'}
  }
  ,wmode: 'transparent'
});


sIFR.replace(miryad, {
  selector: '#latitud h1'
  ,css: {
    '.sIFR-root': { 'color': '#363636', 'font-size': '11px', 'display':'block', 'float':'left', 'text-align': 'left', 'width':'100px', 'text-transform':'uppercase'}
  }
  ,wmode: 'transparent'
});


sIFR.replace(miryad, {
  selector: '#longitud h1'
  ,css: {
    '.sIFR-root': { 'color': '#363636', 'font-size': '11px', 'display':'block', 'float':'left', 'text-align': 'left', 'width':'100px', 'text-transform':'uppercase'}
  }
  ,wmode: 'transparent'
});


sIFR.replace(miryad, {
  selector: '#rumbo h1'
  ,css: {
    '.sIFR-root': { 'color': '#363636', 'font-size': '19px', 'display':'block', 'float':'left', 'text-align': 'left', 'width':'100px', 'text-transform':'uppercase'}
  }
  ,wmode: 'transparent'
});


sIFR.replace(miryad, {
  selector: '#viaje h1'
  ,css: {
    '.sIFR-root': { 'color': '#363636', 'font-size': '15px', 'display':'block', 'float':'left', 'text-align': 'left', 'width':'100px', 'text-transform':'uppercase'}
  }
  ,wmode: 'transparent'
});


sIFR.replace(miryad, {
  selector: '#fecha-posicion h1'
  ,css: {
    '.sIFR-root': { 'color': '#363636', 'font-size': '11px', 'display':'block', 'float':'left', 'text-align': 'left', 'width':'100px', 'text-transform':'uppercase'}
  }
  ,wmode: 'transparent'
});


sIFR.replace(miryad, {
  selector: '#velocidad-maxima h1'
  ,css: {
    '.sIFR-root': { 'color': '#363636', 'font-size': '14px', 'display':'block', 'float':'left', 'text-align': 'left', 'width':'100px', 'text-transform':'uppercase'}
  }
  ,wmode: 'transparent'
});

sIFR.replace(miryad, {
  selector: '#frenados h1'
  ,css: {
    '.sIFR-root': { 'color': '#363636', 'font-size': '14px', 'display':'block', 'float':'left', 'text-align': 'left', 'width':'100px', 'text-transform':'uppercase'}
  }
  ,wmode: 'transparent'
});

sIFR.replace(miryad, {
  selector: '#luces h1'
  ,css: {
    '.sIFR-root': { 'color': '#363636', 'font-size': '14px', 'display':'block', 'float':'left', 'text-align': 'left', 'width':'100px', 'text-transform':'uppercase'}
  }
  ,wmode: 'transparent'
});


sIFR.replace(miryad, {
  selector: '#georeferencia h1'
  ,css: {
    '.sIFR-root': { 'color': '#363636', 'font-size': '11px', 'display':'block', 'float':'left', 'text-align': 'left', 'width':'100px', 'text-transform':'uppercase'}
  }
  ,wmode: 'transparent'
});
