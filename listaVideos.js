var videos=[
{titulo: 'Arctic Monkeys - Do I Wanna Know? (Official Video)',descripcion: '1,613,344,944 vistas  18 jun 2013Arctic Monkeys - ', url: 'https://www.youtube.com/embed/bpOSxM0rNPM?si=gDn6H2i6TDhwGhTh'},
{titulo: 'The Neighbourhood - Sweater Weather (Lyrics)',descripcion: '21,590,501 vistas  18 ene 2023 ', url: 'https://www.youtube.com/embed/SC8cSnFTd_0?si=f1y7AaF15hfosJJK'},
{titulo: 'David Kushner - Daylight (Lyrics)',descripcion: ' #7clouds #SweaterWeather #TheNeighbourhood', url: 'https://www.youtube.com/embed/bpOSxM0rNPM?si=93CUm-nDcofH4vS7'},
{titulo: 'Arctic Monkeys - Whyd_You Only Call Me When Youre High? (Official Video)',descripcion: '🎵 Follow the official 7clouds playlist ', url: 'https://www.youtube.com/embed/nyuo9-OjNNg?si=DJgb6NuSlnuMJ9QB'},
];
var listaVideos=document.getElementById('MostrarListavideos');

mostrarListavideos(videos);

function mostrarListavideos(videosBuscados) {
    listaVideos.innerHTML=' ';

    videosBuscados.forEach(indiceVideo=> {
        var fila=document.createElement('div');
        var col1UrlVideo=document.createElement('div') ;
        var iframeVideo=document.createElement('iframe');
        fila.setAttribute('class','row');
        col1UrlVideo.setAttribute('class','col');
        iframeVideo.setAttribute('src',indiceVideo.url);
        iframeVideo.setAttribute('width', '400px');
        iframeVideo.setAttribute('height', '300px');
        iframeVideo.setAttribute('frameborder','0');
        col1UrlVideo.appendChild(iframeVideo);
        fila.appendChild(col1UrlVideo);
        // crear div para el titulo y la descripcion  del video (columna2)
        var col2TituloVideo=document.createElement('div');
        var h4TituloVideo=document.createElement('h4');
        var h6DescripcionVideo=document.createElement('h6');

        col2TituloVideo.setAttribute('class','col');
        h4TituloVideo.textContent=indiceVideo.titulo;
        h6DescripcionVideo.textContent=indiceVideo.descripcion;

        col2TituloVideo.appendChild(h4TituloVideo);
        col2TituloVideo.appendChild(h6DescripcionVideo);
        fila.appendChild(col2TituloVideo);

        //crear el div paar el boton  columna 3 

        var col3BotonVideo=document.createElement('div');
        var botonVideo=document.createElement('button');
        col3BotonVideo.setAttribute('class','col');
        botonVideo.setAttribute('class','btn btn-outline-primary')
        botonVideo.innerHTML='';
        col3BotonVideo.appendChild(botonVideo);
        fila.appendChild(col3BotonVideo);

        listaVideos.appendChild(fila);
    });   
}
function buscarVideos() {
    var textoVideo=document.getElementById('txtBuscar').value;
   // alert('texto buscado' + textoVideo);
   var videosBuscados=videos.filter(
    indiceVideo =>{
        return indiceVideo.titulo.includes(textoVideo);
       }
   );
   mostrarListavideos(videosBuscados);
   }
