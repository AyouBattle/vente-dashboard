import React from "react";

function VenteList({ ventes }) {
  return (
    <div>
      <h2>Liste des ventes</h2>
      <ul>
        {ventes.map((vente) => (
          <li key={vente.id}>
            {vente.produit} – {vente.quantite} unités à {vente.prix}€ → Total :{" "}
            {vente.quantite * vente.prix}€
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VenteList;
