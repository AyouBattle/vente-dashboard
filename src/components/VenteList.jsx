import React from "react";

function VenteList({ ventes, onModifier, onSupprimer }) {
  return (
    <div>
      <h2>Liste des ventes</h2>
      <ul>
        {ventes.map((vente) => (
          <li key={vente.id}>
            {vente.produit} – {vente.quantite} unités à {vente.prix}€ → Total = {" "}
            {vente.quantite * vente.prix}€{" "}
            <button onClick={() => onModifier(vente)}>✏️</button>
            <button onClick={() => onSupprimer(vente.id)}>🗑️</button>
            <button onClick={() => onSupprimer(vente.id)} style={{backgroundColor: "green", color: "red"}}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VenteList;
