import React, { useState, useEffect } from "react";
import MangaCard from "../components/MangaCard/MangaCard";
import { Link } from "react-router-dom";

function Release() {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/release")
      .then((response) => {
        console.log("Réponse API:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Données récupérées:", data); // Vérifier les données récupérées
        setMangas(data.mangas || []); // Mettre à jour les mangas
      })
      .catch((error) => {
        console.log("Erreur lors de la récupération des mangas:", error);
      });
  }, []); 

  return (
    <div className="product">
      <div className="product-content">
        {mangas.length > 0 ? (
          mangas.map((manga) => {
            console.log("Thumbnail dans Release:", manga.thumbnail); // Vérifier le chemin

            return (
              <div key={manga.id}>
                <Link to={`/manga/${manga.id}`}>
                  <MangaCard
                     thumbnail={`images/manga/${manga.thumbnail}`} // permet d'afficher les images dans la page Release et le composant MangaCard
                    id={manga.id}
                    title={manga.title}
                    releaseDate={manga.release_date}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <div>Aucun manga trouvé.</div> // Message si aucun manga n'est trouvé
        )}
      </div>
    </div>
  );
}

export default Release;
