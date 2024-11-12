import React from 'react';
import FilmCard from './Film';

function FilmGrid({ peliculas, handleEdit, setPeliculas }) {
  // DELETE PELI
  const handleDelete = (id) => {
    fetch(`https://pear-misty-comet.glitch.me/data/${id}`, {
      method: 'DELETE',
    })
    .then((response) => response.json())  
    .then(() => {
      setPeliculas((prevPeliculas) => prevPeliculas.filter((film) => film.id !== id));
    })
    .catch((error) => console.error('Error al eliminar película', error));
  };

  return (
    <div>
      <div style={{
        display: 'grid',  // Usamos grid para tener un control más eficiente de las columnas
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', // Se asegura de que no haya más de 7 por fila
        gap: '8px',  // Espaciado entre tarjetas
        padding: '16px',
        marginLeft: '35px',
        overflowX: 'auto', // Habilitar scroll horizontal si es necesario
      }}>
        {peliculas.map((film) => (
          <div key={film.id}>
            <FilmCard
              film={film}
              handleDelete={() => handleDelete(film.id)}
              handleEdit={() => handleEdit(film)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmGrid;
