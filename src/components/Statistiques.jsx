import React from "react";

function Statistiques({ ventes }) {
  const chiffreAffaire = ventes.reduce(
    (acc, vente) => acc + vente.prix * vente.quantite,
    0
  );

  const produitLePlusRentable = ventes.reduce((top, vente) => {
    const currentCA = vente.prix * vente.quantite;
    const topCA = top.prix * top.quantite;
    return currentCA > topCA ? vente : top;
  });

  return (
    <div>
      <h2>Statistiques</h2>
      <p>Chiffre d’affaires total : {chiffreAffaire} €</p>
      <p>
        Produit le plus rentable : {produitLePlusRentable.produit} (
        {produitLePlusRentable.quantite * produitLePlusRentable.prix} €)
      </p>
    </div>
  );
}

export default Statistiques;
