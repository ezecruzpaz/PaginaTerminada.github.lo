var videos = [
    { titulo: 'Video 1', descripcion: 'Descripción video 1', url: 'https://www.youtube.com/embed/o6vu9wI9OZk?si=B-Z6sbwoIcNd8Kow' },
    { titulo: 'Video 2', descripcion: 'Descripción video 2', url: 'https://youtu.be/YxZXLWIx6ik?feature=shared' },
    { titulo: 'Video 3', descripcion: 'Descripción video 3', url: 'https://youtu.be/YxZXLWIx6ik?feature=shared' },
    { titulo: 'Video 4', descripcion: 'Descripción video 4', url: 'https://youtu.be/YxZXLWIx6ik?feature=shared' }
  ];
  
  var listaVideos = document.getElementById('listaVideosArreglo');
  
  mostrarListaVideos(videos);
  
  function mostrarListaVideos(vidoesBuscados) {
    listaVideos.innerHTML = '';
  
    vidoesBuscados.forEach(indiceVideos => {
      var fila = document.createElement('div');
      var col1URLVideo = document.createElement('div');
      var iframeVideo = document.createElement('iframe');
      fila.setAttribute('class', 'row');
      col1URLVideo.setAttribute('class', 'col');
      iframeVideo.setAttribute('src', indiceVideos.url);
      iframeVideo.setAttribute('width', '300px');
      iframeVideo.setAttribute('height', '200px'); 
      iframeVideo.setAttribute('frameborder', '0');
      col1URLVideo.appendChild(iframeVideo);
      fila.appendChild(col1URLVideo);
  
        //crear div para el titulo y la descripicion
        col2TituloVideo = document.createElement('div');
        var h4TituloVideo = document.createElement('h4');
        var h6DesTitulo = document.createElement('h6');

        col2TituloVideo.setAttribute('class','col');
        h4TituloVideo.textContent=indiceVideos.titulo;
        h6DesTitulo.textContent=indiceVideos.descripcion;

        col2TituloVideo.appendChild(h4TituloVideo);
        col2TituloVideo.appendChild(h6DesTitulo);
        fila.appendChild(col2TituloVideo);


        //cerar div para el boton
        col3BotonVideo = document.createElement('div');
        var botonvideo = document.createElement('button');

        col3BotonVideo.setAttribute('class','col');
        botonvideo.setAttribute('class','btn btn-outline-primary');
        botonvideo.innerHTML='@';

        col3BotonVideo.appendChild(botonvideo);
        fila.appendChild(col3BotonVideo);


      listaVideos.appendChild(fila);
    });
  }
  
  function buscarVideos() {
    var textoVideo = document.getElementById('txtBuscarVideo').value; // Fix id here
    //alert('texto buscado' + textoVideo);
    vidoesBuscados=videos.filter(
        indiceVideos =>{

            return indiceVideos.titulo.includes(textoVideo);
        }
    );
    mostrarListaVideos(vidoesBuscados);

  }
  