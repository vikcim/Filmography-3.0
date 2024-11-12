import React from 'react';
import ButtonUpdate from './UpdateButton';
import DeleteButton from './DeleteButton';

function FilmCard({ film, handleDelete, handleEdit }) {
  return (
    <div style={{
      backgroundColor: '#1b1e23',
      borderRadius: '8px',
      padding: '4px',
      margin: '4px',
      width: '145px',  // Ajusté el ancho para que no sea tan grande
      color: '#ddd',
      boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      textAlign: 'center', 
      position: 'relative',
      height: '340px', // Ajusté la altura de la tarjeta
      overflow: 'hidden', // Evita que el contenido se desborde
    }}>
      <DeleteButton handleDelete={() => handleDelete(film.id)} />
      
      {/* Imagen de la película con altura y objectFit para asegurar que se vea bien */}
      <img 
        src={film.image} 
        alt={film.name} 
        style={{ 
          width: '90%', 
          height: '180px',  // Ajusté la altura de la imagen
          objectFit: 'cover',  // La imagen cubrirá el área sin ser recortada
          borderRadius: '4px', 
          marginBottom: '10px' 
        }} 
      />
      
      {/* Nombre de la película */}
      <h3 style={{ margin: '5px 0', fontSize: '18px',height: '40px',  // Fija una altura para el título
  lineHeight: '20px',   }}>{film.name}</h3>
      
      {/* Géneros de la película */}
      <h4 style={{
        margin: '2px 2px',
        fontSize: '14px',  // Fuente más pequeña
        whiteSpace: 'wrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',  // Recorta el texto si es demasiado largo
      }}>
        {(film.genres && Array.isArray(film.genres) && film.genres.length > 0)
          ? film.genres.join(', ')
          : 'Género no disponible'}
      </h4>
      
      {/* Año y botones */}
      <div style={{
        marginTop: 'auto', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems:"center"
      }}>
        <p style={{ margin: '0px 0', fontSize: '14px' , marginBottom:"2px"}}>Año: {film.year}</p>
        <ButtonUpdate handleEdit={() => handleEdit(film)} />
      </div>
    </div>
  );
}

export default FilmCard;
