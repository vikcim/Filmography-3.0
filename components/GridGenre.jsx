import React, { useState, useEffect } from "react";

function GenreGrid({ onToggleGenre, selectedGenres }) {
  useEffect(() => {
    console.log("Selected Genres:", selectedGenres);
  }, [selectedGenres]);

  const [genres, setGenres] = useState([]);
  const [newGenre, setNewGenre] = useState("");

  useEffect(() => {
    fetch("https://creative-polarized-math.glitch.me/genre")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGenres(data);
      })
      .catch((error) => {
        console.error("Error al cargar géneros:", error);
      });
  }, []);

  const handleAddGenre = () => {
    if (newGenre.trim() === "") return;

    fetch("https://creative-polarized-math.glitch.me/genre", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newGenre }),
    })
      .then((response) => response.json())
      .then((genre) => {
        console.log("Nuevo género agregado:", genre);
        setGenres([...genres, genre]);
        setNewGenre("");
      })
      .catch((error) => {
        console.error("Error al agregar género:", error);
      });
  };

  const handleDeleteGenre = (id) => {
    fetch(`https://creative-polarized-math.glitch.me/genre/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setGenres((prevGenres) => prevGenres.filter((genre) => genre.id !== id));
      })
      .catch((error) => {
        console.error("Error al eliminar género:", error);
      });
  };

  const toggleSelectGenre = (genreName) => {
    onToggleGenre(genreName);
  };

  return (
    <div style={{ marginTop: "5px", backgroundColor: "#2d2f35", padding: "5px", borderRadius: "2px", width: "100%" }}>
      <h4 style={{ color: "#999", textAlign: "left", fontSize: "14px", margin: "0px -8px" }}>
        GÉNEROS
      </h4>
      <label style={{ display: "flex", gap: "0", marginBottom: "10px", marginTop: "2px" }}>
        <input
          type="text"
          placeholder="Nuevo género..."
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)}
          style={{
            width: "15%",
            padding: "5px",
            borderRadius: "4px",
            border: "1px solid #444",
            backgroundColor: "#1b1e23",
            color: "#ddd",
            margin: "0px -12px",
          }}
        />
        <button
          onClick={handleAddGenre}
          style={{
            backgroundColor: "#2b78e4",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "4px",
            cursor: "pointer",
            fontSize: "20px",
            width: "28px",
            height: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0px -16px",
          }}
        >
          +
        </button>
      </label>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", margin: "0px -12px" }}>
        {genres.map((genre) => (
          <div
            key={genre.id}
            onClick={() => toggleSelectGenre(genre.name)}
            style={{
              backgroundColor: selectedGenres.includes(genre.name) ? "#2b78e4" : "#444",
              padding: "6px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              position: "relative",
              color: "#ddd",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              maxWidth: "100%",
              minWidth: "40px",
              cursor: "pointer",
              
            }}
          >
            <span style={{ fontSize: "14px", wordBreak: "break-word", whiteSpace: "nowrap", flexGrow: 1 }}>
              {genre.name}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteGenre(genre.id);
              }}
              style={{
                background: "transparent",
                color: "white",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                padding: "0",
                lineHeight: "1",
                marginLeft: "10px",
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenreGrid;
