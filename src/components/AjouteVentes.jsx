import React, { useState } from 'react'

function AjouteVentes({onAjoute}) {
    const [produit, setProduit] = useState("");
    const [prix, setPrix] = useState("");
    const [quantite, setQuantite] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(!produit || !prix || !quantite) return;

        const nouvelleVente = {
            id: Date.now(),
            produit,
            prix: parseFloat(prix),
            quantite: parseInt(quantite)
        }
         onAjoute(nouvelleVente);

         setProduit("");
         setPrix("");
         setQuantite("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit} style={{marginBottom: "2rem"}} >
            <h2>Ajouter une nouvelle vente</h2>
            <input
                type='text'
                placeholder='Nom du produit'
                value={produit}
                onChange={(e)=> setProduit(e.target.value)}
            />
            <input
                type='number'
                placeholder='Prix'
                value={prix}
                onChange={(e)=> setPrix(e.target.value)}
            />
            <input
                type='number'
                placeholder='Quantité'
                value={quantite}
                onChange={(e)=> setQuantite(e.target.value)}
            />
            <button type='submit'>Ajouter</button>
        </form>
    </div>
  )
}

export default AjouteVentes