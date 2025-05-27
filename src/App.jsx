import React, { useEffect, useState } from "react";
import VenteList from "./components/VenteList";
import Statistiques from "./components/Statistiques";
import AjouteVentes from "./components/AjouteVentes";

const dataVentes = [
  { id: 1, produit: "Stylo", prix: 2, quantite: 3 },
  { id: 2, produit: "Cahier", prix: 5, quantite: 2 },
  { id: 3, produit: "Crayon", prix: 3, quantite: 6 },
  { id: 4, produit: "Stylo", prix: 3, quantite: 4 }
];

function App() {
  const [ventes, setVentes] = useState(() => {
  const donneesLocales = localStorage.getItem("ventes");
  return donneesLocales ? JSON.parse(donneesLocales) : dataVentes;
});
useEffect(() => {
  localStorage.setItem("ventes", JSON.stringify(ventes));
}, [ventes]);
  // const [triActif, setTriActif] = useState(false);

  const triCroissant = ()=>{
    const VentesTri = [...dataVentes].sort((a,b)=>(b.prix * b.quantite - a.prix * a.quantite));
    setVentes(VentesTri);
    // setTriActif(true);
  }

  const AjouterVentes = (vente)=>{
    setVentes([...ventes, vente]);
  }
  
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial"}}>
      <h1>Dashboard des ventes</h1>
      <button onClick={triCroissant} >
        🔽 Trier par chiffre d’affaires décroissant
      </button>
      <Statistiques ventes={ventes} />
      <VenteList ventes={ventes} />
      <AjouteVentes onAjoute={AjouterVentes}/>
    </div>
  );
}

export default App;
