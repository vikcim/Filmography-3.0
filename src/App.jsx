import React, { useState, useEffect } from 'react';
import FormNewFilm from '../components/FormNewFilm';
import FilmGrid from '../components/GridFilms';

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);


  // Importar les pelis desde el json server
  useEffect(() => {
    fetch('https://pear-misty-comet.glitch.me/data')
      .then((response) => response.json())
      .then((data) => setPeliculas(data))
      .catch((error) => console.error('No arriben datos', error));
  }, []);

  //He intentat no afegir funcionalitats en app pero es que el addOrUpdateFilm m' estava donant moltisims problemes
  //perque no s' importava la funcio desde grid, no hem pillaba esta linea.onNewFilm={addOrUpdateFilm}. 
  //He provat dos solucions: una era fer-ho desde ací, i l' altra era pasar el form al grid.(<FormNewFilm onNewFilm={addOrUpdateFilm} selectedFilm={selectedFilm} />) 
  //Es com si el formNewFilm te que estar en la mateixa pagina que la funció, 
  


  // afegir or actualitzar

  const addOrUpdateFilm = (film) => {
    if (selectedFilm) {
      // EDITAR
      fetch(`https://pear-misty-comet.glitch.me/data/${selectedFilm.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(film),
      })
        .then((response) => response.json())
        .then((updatedFilm) => {
          setPeliculas((prevPeliculas) =>
            prevPeliculas.map((p) => (p.id === updatedFilm.id ? updatedFilm : p))
          );
          setSelectedFilm(null); 
        })
        .catch((error) => console.error('Error al editar peli', error));
    } else {

      // CREAR PELI
      fetch('https://pear-misty-comet.glitch.me/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(film),
      })
        .then((response) => response.json())
        .then((newFilm) => setPeliculas([...peliculas, newFilm]))
        .catch((error) => console.error('Error al afegir peli', error));
    }
  };

  
  const handleEdit = (film) => {
    setSelectedFilm(film); // Cuan apretem el boto edit, cride a handleEdit que crea el selectedFilm
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Filmography</h1>
      <FormNewFilm onNewFilm={addOrUpdateFilm} selectedFilm={selectedFilm} />
      <FilmGrid
        peliculas={peliculas}
        handleEdit={handleEdit}
        setPeliculas={setPeliculas}
      />
    </>
  );
}

export default App;
