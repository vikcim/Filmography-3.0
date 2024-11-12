import React, { useEffect, useState } from "react";
import ButtonCreate from "./CreateButton";
import GenreGrid from "./GridGenre";  // Mantener la importación del grid de géneros

function FormNewFilm({ onNewFilm, selectedFilm }) {
  const [namePeli, setNamePeli] = useState("");
  const [yearPeli, setYearPeli] = useState("");
  const [posterPeli, setPosterPeli] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);  // Nuevo estado para géneros seleccionados

  useEffect(() => {
    if (selectedFilm) {
      setNamePeli(selectedFilm.name);
      setYearPeli(selectedFilm.year);
      setPosterPeli(selectedFilm.image);
      setSelectedGenres(selectedFilm.genres || []); // Asegúrate de obtener los géneros al editar
    } else {
      setNamePeli("");
      setYearPeli("");
      setPosterPeli("");
      setSelectedGenres([]); // Resetea los géneros seleccionados al crear una nueva película
    }
  }, [selectedFilm]);

  const handleGenreToggle = (genre) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genre)
        ? prevGenres.filter((g) => g !== genre)
        : [...prevGenres, genre]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaPeli = {
      name: namePeli,
      year: yearPeli,
      image: posterPeli,
      genres: selectedGenres,  // Incluimos los géneros seleccionados
    };

    if (namePeli && yearPeli && posterPeli) {
      onNewFilm(nuevaPeli); // Llama a la función de agregar o actualizar película
    }

    setNamePeli('');
    setYearPeli('');
    setPosterPeli('');
    setSelectedGenres([]);  // Resetea los géneros seleccionados
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        gap: '15px',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#2d2f35',
        padding: '20px 20px 15px 25px',
        borderRadius: '6px',
        maxWidth: '800px',
        width: '800px',
        margin: '15px auto',
        height: '80%',
      }}
    >
      <div style={{ display: 'flex', gap: '20px', width: '100%' }}>
        <div style={{ flex: 1 }}>
          <label style={{ color: '#999', textAlign: 'left', display: 'block', fontSize: '14px', margin: '0px -4px' }}>NAME</label>
          <input
            type="text"
            placeholder="Film Name..."
            value={namePeli}
            onChange={(e) => setNamePeli(e.target.value)}
            style={{
              padding: '6px',
              width: '100%',
              borderRadius: '4px',
              border: '1px solid #444',
              backgroundColor: '#1b1e23',
              color: '#ddd',
              margin: '4px -8px'
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <label style={{ color: '#999', textAlign: 'left', display: 'block', fontSize: '14px', margin: '0px 2px' }}>YEAR</label>
          <input
            type="text"
            placeholder="Film Year..."
            value={yearPeli}
            onChange={(e) => setYearPeli(e.target.value)}
            style={{
              padding: '6px',
              width: '100%',
              borderRadius: '4px',
              border: '1px solid #444',
              backgroundColor: '#1b1e23',
              color: '#ddd',
              margin: '4px -2px'
            }}
          />
        </div>
      </div>

      <div style={{ width: '100%' }}>
        <label style={{ color: '#999', textAlign: 'left', display: 'block', fontSize: '14px', margin: '0px -4px' }}>FILM POSTER</label>
        <input
          type="text"
          placeholder="Film Poster..."
          value={posterPeli}
          onChange={(e) => setPosterPeli(e.target.value)}
          style={{
            padding: '6px',
            width: '100%',
            borderRadius: '4px',
            border: '1px solid #444',
            backgroundColor: '#1b1e23',
            color: '#ddd',
            margin: '4px -8px'
          }}
        />
        <GenreGrid
  onToggleGenre={handleGenreToggle}
  selectedGenres={selectedGenres}  // Asegúrate de pasar esto correctamente
/>
      </div>

      <ButtonCreate handleCreate={handleSubmit} buttonText={selectedFilm ? "Actualizar" : "Crear"} />
    </form>
  );
}

export default FormNewFilm;
