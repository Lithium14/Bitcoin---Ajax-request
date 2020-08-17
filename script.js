const url = 'https://blockchain.info/ticker'

function recupererPrix() {
  // Créer une requête
  let requete = new XMLHttpRequest(); // Créer un objet

  requete.open('GET', url) // Premier paramètre => Méthode GET / POST
  // Deuxième paramètre : url

  requete.responseType = 'json'; // On attend du JSOn
  requete.send(); // On envoie la requête

  // Dès qu'on reçoit une réponse , cette fonction est executée
  requete.onload = function() {
    // Verifie l'état de notre côté si elle est égal à DONE ( accompli )
    if(requete.readyState === XMLHttpRequest.DONE) {
      if(requete.status === 200) {
        let reponse = requete.response; // On stock la réponse
        let prixEnEuros = reponse.EUR.last;
        document.querySelector('#price_label').textContent = prixEnEuros;
      } else {
        alert('Un problème est intervenu, merci de revenir plus tard.')
      }
    }
  }
}


setInterval(recupererPrix, 1000);
