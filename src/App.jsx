import React from "react";
import VenteList from "./components/VenteList";
import Statistiques from "./components/Statistiques";

const ventes = [
  { id: 1, produit: "Stylo", prix: 2, quantite: 3 },
  { id: 2, produit: "Cahier", prix: 5, quantite: 2 },
  { id: 3, produit: "Crayon", prix: 3, quantite: 6 },
  { id: 4, produit: "Stylo", prix: 3, quantite: 4 }
];

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial"}}>
      <h1>Dashboard des ventes</h1>
      <Statistiques ventes={ventes} />
      <VenteList ventes={ventes} />
    </div>
  );
}

export default App;
