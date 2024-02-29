const moduloVideos = (() => {
  const mostrarVideo = (url, id) => {
    document.getElementById(id).setAttribute("src", url);
  };
  const insertarVideo = (url, id) => {
    mostrarVideo(url, id);
  };
  return {
    insertarVideo,
  };
})();

class Multimedia {
  constructor(url) {
    this._url = url;
  }

  getUrl() {
    return this._url;
  }

  setInicioTime(nuevaUrl) {
    this._url = nuevaUrl;
    return console.log(
      "Este método es para realizar un cambio en la URL del video"
    );
  }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }
    
    playMultimedia = () => {
        moduloVideos.insertarVideo(this._url, this._id);
    };
    
    setInicio = (tiempo) => {
        const urlInicial = `${this._url}&amp;start=${tiempo}`;
        return urlInicial;
    };
}

let musica = new Reproductor(
  "https://www.youtube.com/embed/0g5UI0QQ6nU?si=1iEodk5WcbKeKLf4",
  "musica"
);

let pelicula = new Reproductor(
  "https://www.youtube.com/embed/s4gBChg6AII?si=ejYZaUUSLIMuisMF",
  "peliculas"
);

let serie = new Reproductor(
  "https://www.youtube.com/embed/U3yiVM5nSqw?si=_GFtEzfZHKLa7YuN",
  "series"
);

iniciadorMusica = musica.setInicio("170");
musica.setInicioTime(iniciadorMusica);
musica.playMultimedia();

iniciadorPelicula = pelicula.setInicio("120");
pelicula.setInicioTime(iniciadorPelicula);
pelicula.playMultimedia();

iniciadorSerie = serie.setInicio("250");
serie.setInicioTime(iniciadorSerie);
serie.playMultimedia();
