// Récupération des infos.
const champPrenom = document.getElementById("Name-input")
const bouton = document.getElementById("btn-fix")
const pastilles = document.querySelectorAll(".mood")
let humeurChoisie = "" 

// Détection du click sur une pastille.
pastilles.forEach(function(pastille) {
  pastille.addEventListener("click", function() {

    // On enlève la sélection de TOUTES les pastilles.
    pastilles.forEach(function(p) {
      p.classList.remove("selected")
    })

    // On ajoute selected sur celle cliquée.
    pastille.classList.add("selected")
    humeurChoisie = pastille.textContent
    console.log("Humeur choisie : " + humeurChoisie)
  })
})

// Click sur Fix my mood.
bouton.addEventListener("click", function() {
  let prenom = champPrenom.value
  if (prenom === "") {
    alert("Entrez votre prénom !")
    return
  }
  if (humeurChoisie === "") {
    alert("Choisissez votre humeur !")
    return
  }
  window.location.href = "Dashboard.html?prenom=" + prenom + "&humeur=" + humeurChoisie;
})
//restriction sur le login.
function filtrerSaisie(input) {
  input.value = input.value.replace(/[^a-zA-ZÀ-ÿ\s-]/g, '');
}
