const moods = {

  "Motivé.e": {
    couleur: "#5c35a0",
    citation: "Si tu ne peux pas voler, alors cours. Si tu ne peux pas courir, alors marche. Mais quoi que tu fasses, continue d'avancer.",
    auteur: "Martin Luther King",
    objectif: "Fais une chose aujourd'hui qui te rapproche de ton but.",
    video: "https://youtu.be/D6qTPTj9g3I?si=wyuRvc3s-iAwe56V"
  },

  "Serein.e": {
    couleur: "#27ae60",
    citation: "Le passé est déjà mort. L'avenir n'existe pas encore. Seul le moment présent t'appartient, alors respire.",
    auteur: "Thorfinn (Vinland Saga)",
    objectif: "Prends 10 minutes pour respirer profondément.",
    video: "https://youtu.be/5bxBcbkSrtY?si=q5IDDNSEwm41sXBI"
  },

  "Triste": {
    couleur: "#3f75ac",
    citation: "Arrête de ressasser ce que tu as perdu ! Demande-toi plutôt ce qu'il te reste encore !",
    auteur: "Jinbe (One Piece)",
    objectif: "Appelle quelqu'un qui te fait du bien aujourd'hui.",
    video: "https://youtu.be/PtlhLML01yA?si=5gWbhgZ0-dm-AupD"
  },

  "Fatigué.e": {
    couleur: "#7f8c8d",
    citation: "Si tu es fatigué, apprends à te reposer, pas à abandonner.",
    auteur: "Banksy",
    objectif: "Accorde toi une vraie pause de 20 minutes sans écran.",
    video: "https://youtu.be/AZrm3aJ1e1Y?si=WA4TH-_IRVHDseZN"
  },

  "Procrastinateur.trice": {
    couleur: "#8FA3B5",
    citation: "Ne remets jamais à demain ce que tu peux faire aujourd'hui.",
    auteur: "Benjamin Franklin",
    objectif: "Fais juste 5 minutes de la tâche que tu repousses.",
    video: "https://youtube.com/shorts/I1v9Eol6EKA?si=w2LTwaRYYlI8wpss"
  },

  "Peu confiant.e": {
    couleur: "#c0392b",
    citation: "Ne te limite pas. Si tu mets des limites à ce que tu peux faire, physiquement ou mentalement, cela se propagera dans tout ton travail.",
    auteur: "Bruce Lee",
    objectif: "Écris 3 choses que tu fais bien. Juste 3.",
    video: "https://youtu.be/rGdOJTc252s?si=DiOgVK5aC6Wq4qyu"
  },

  "Stressé.e": {
    couleur: "#A32D2D",
    citation: "Face à un mur trop haut, inutile de foncer tête baissée. Respire, prends du recul et regarde s'il n'y a pas un autre chemin.",
    auteur: "Koro-sensei (Assassination Classroom)",
    objectif: "Prends 5 minutes pour toi, loin de tout.",
    video: "https://youtu.be/G23tw4UGPis?si=w87HTM8WqcTNpUG8"
  },

  "Fâché.e": {
    couleur: "#922b21",
    citation: "La colère est un moteur puissant, mais si tu la laisses te contrôler, elle te détruira avant que tu n'aies pu atteindre ton but.",
    auteur: "Vegeta (Dragon Ball Z)",
    objectif: "Compte jusqu'à 10 et respire avant de réagir.",
    video: "https://youtu.be/rucv5jSsZGA?si=DcvGIyaYkaFp2CxR"
  },

  "Perdu.e": {
    couleur: "#5d6d7e",
    citation: "Tu devrais profiter des petits détours. C'est là que tu trouveras les choses plus importantes que ce que tu cherches.",
    auteur: "Ging Freecss (Hunter x Hunter)",
    objectif: "Note 3 petites tâches prioritaires pour aujourd'hui et commence par la plus simple.",
    video: "https://youtu.be/Nl96viPXpdM?si=_IoDGAPZkpW3K4bE"
  },
  "Pensif.ve": {
    couleur: "#2e4053",
    citation: "La logique vous mènera d'un point A à un point B. L'imagination vous emmènera partout.",
    auteur: "Albert Einstein",
    objectif: "Prends 5 minutes pour écrire tes pensées sur papier afin de libérer ton esprit.",
    video: "https://youtu.be/9mUWNqJQ7l8?si=aXKzY0WXV_-NOW4h"
  },

  "Nostalgique": {
    couleur: "#ca7830",
    citation: "La vie ne peut être comprise qu'en regardant en arrière, mais elle ne peut être vécue qu'en regardant en avant.",
    auteur: "Søren Kierkegaard",
    objectif: "Repense à un bon souvenir.",
    video: "https://youtu.be/ssox9cQz0S8?si=p174TGAJtmbBBVXF"
  },

  "Frustré.e": {
    couleur: "#b03a2e",
    citation: "La frustration n'est rien d'autre que la résistance à la réalité. Concentre ton énergie sur ce qui dépend de toi, et lâche prise sur le reste.",
    auteur: "Épictète",
    objectif: "Fais une pause de 10 minutes, marche un peu ou étire-toi pour relâcher la tension.",
    video: "https://youtu.be/Krel2WyN_A0?si=fNsDRTL-lbpmcsMP"
  },

  "Joyeux.se": {
    couleur: "#f1ca2c",
    citation: "Le rire, c'est la musique de l'âme. Partage-le sans modération.",
    auteur: "Omar Sy",
    objectif: "Partage ta bonne humeur ! Envoie un message sympa à un proche ou fais un compliment.",
    video: "https://youtu.be/BIFn-_Ms81o?si=WVxrqg3I7p45muS7"
  },

  "Seul.e": {
    couleur: "#414561",
    citation: "La pire des solitudes, c'est d'avoir le sentiment que personne n'a besoin de toi dans ce monde. Mais rappelle-toi qu'il suffit d'un seul lien pour briser ce silence.",
    auteur: "Naruto Uzumaki (Naruto)",
    objectif: "Profite de ce moment pour te recentrer : lis un chapitre de livre, écris tes pensées ou prépare-toi une boisson chaude.",
    video: "https://youtu.be/wfalPd4mVGo?si=UBX96cABa2ggMggk"
  }

}
// Récuperation et affichage.
const urlParams = new URLSearchParams(window.location.search)

// On récupère le prénom et l'humeur
let prenom = urlParams.get("prenom")
let humeur = urlParams.get("humeur")

// On récupère les données de l'humeur dans l'objet moods
let data = moods[humeur]

document.getElementById("dash-name").textContent = prenom;
document.getElementById("dash-mood-tag").textContent = "Humeur :" + humeur;
document.getElementById("dash-header").style.background = data.couleur;
document.getElementById("citation").textContent = data.citation;
document.getElementById("auteur").textContent = "- " + data.auteur;
document.getElementById("objectif").textContent = data.objectif;
document.getElementById("yt-link").href = data.video;

// Date automatique
let today = new Date();
let dateFormatee = today.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
})
document.getElementById("dash-date").textContent = dateFormatee;

// Réajustement 
if ( humeur === "Procrastinateur.trice" ) {
   document.getElementById("dash-mood-tag").style.width= "17%";
}
if ( humeur === "Peu confiant.e" ) {
   document.getElementById("dash-mood-tag").style.width= "17%";
}
if ( humeur === "Nostalgique" ) {
   document.getElementById("dash-mood-tag").style.width= "12%";
}
if (humeur === "Motivé.e") {
   document.getElementById("dash-mood-tag").style.backgroundColor = "#fffefe1a";
}
if ( humeur === "Joyeux.se" ) {
   document.getElementById("dash-header").style.backgroundImage = "url(joie.jfif)"
   document.getElementById("dash-header").style.backgroundPosition = "center"
   document.getElementById("dash-mood-tag").style.border = "1px solid black";
   document.getElementById("dash-mood-tag").style.backgroundColor = "#fffefe3d";
   document.getElementById("dash-name").style.color= "black";
   document.getElementById("dash-date").style.color= "black";
   document.getElementById("dash-mood-tag").style.color= "black";
   document.querySelector(".dash-morningd").style.color= "black";
   document.querySelector(".dash-cit-header").style.color = "#b49a32";
   document.querySelector("#objectif").style.color = "#b49a32";
   document.querySelector(".dash-header-notebook").style.color = "#b49a32";
   document.querySelector("#auteur").style.color = "#b49a32";
}
if ( humeur === "Serein.e" ) {
   document.getElementById("dash-mood-tag").style.border = "1px solid #fffefe";
   document.getElementById("dash-mood-tag").style.backgroundColor = "#fffefe28";
   document.querySelector(".dash-cit-header").style.color = "#27ae60";
   document.querySelector("#objectif").style.color = "#27ae60";
   document.querySelector(".dash-header-notebook").style.color = "#27ae60";
   document.querySelector("#auteur").style.color = "#27ae60";
}
if ( humeur === "Pensif.ve" ) {
   document.querySelector(".dash-cit-header").style.color = "#2e4053";
   document.querySelector("#objectif").style.color = "#2e4053";
   document.querySelector(".dash-header-notebook").style.color = "#2e4053";
   document.querySelector("#auteur").style.color = "#2e4053";
}
if ( humeur === "Triste" ) {
   document.querySelector(".dash-cit-header").style.color = "#185FA5"; 
   document.querySelector("#objectif").style.color = "#185FA5";
   document.querySelector(".dash-header-notebook").style.color = "#185FA5";
   document.querySelector("#auteur").style.color = "#185FA5";
}
if ( humeur === "Fatigué.e" ) {
   document.getElementById("dash-mood-tag").style.backgroundColor = "#fffefe28";
   document.querySelector(".dash-cit-header").style.color = "#4c5354"; 
   document.querySelector("#objectif").style.color = "#4c5354";
   document.getElementById("dash-header").style.backgroundImage = "url(sad.jfif)"
   document.getElementById("dash-header").style.backgroundSize = "50%"
   document.getElementById("dash-header").style.backgroundPosition = "center"
   document.querySelector(".dash-header-notebook").style.color = "#4c5354";
   document.querySelector("#auteur").style.color = "#4c5354";
}
if ( humeur === "Nostalgique" ) {
   document.querySelector(".dash-cit-header").style.color = "#ca6f1e"; 
   document.querySelector("#objectif").style.color = "#ca6f1e";
   document.querySelector(".dash-header-notebook").style.color = "#ca6f1e";
   document.querySelector("#auteur").style.color = "#ca6f1e";
}
if ( humeur === "Seul.e" ) {
   document.querySelector(".dash-cit-header").style.color = "#414561"; 
   document.querySelector("#objectif").style.color = "#414561";
   document.querySelector(".dash-header-notebook").style.color = "#414561";
   document.querySelector("#auteur").style.color = "#414561";
}
if ( humeur === "Procrastinateur.trice" ) {
   document.getElementById("dash-header").style.backgroundImage = "url(fond.png)"
   document.getElementById("dash-header").style.backgroundPosition = "center"
   document.getElementById("dash-mood-tag").style.backgroundColor = "#fffefe28";
   document.querySelector(".dash-cit-header").style.color = "#1E355E"; 
   document.querySelector("#objectif").style.color = "#1E355E";
   document.querySelector(".dash-header-notebook").style.color = "#1E355E";
   document.querySelector("#auteur").style.color = "#1E355E";
}
if ( humeur === "Peu confiant.e" ) {
   document.getElementById("dash-mood-tag").style.backgroundColor = "#fffefe28";
   document.getElementById("dash-header").style.backgroundImage = "url(img.png)"
   document.getElementById("dash-header").style.backgroundSize = "44%"
   document.getElementById("dash-header").style.backgroundPosition = "center"
   document.querySelector(".dash-cit-header").style.color = "#1E355E"; 
   document.querySelector("#objectif").style.color = "#1E355E";
   document.querySelector(".dash-header-notebook").style.color = "#1E355E";
   document.querySelector("#auteur").style.color = "#1E355E";
}
if ( humeur === "Perdu.e" ) {
   document.getElementById("dash-mood-tag").style.backgroundColor = "#fffefe35";
   document.getElementById("dash-header").style.backgroundImage = "url(back.png)"
   document.getElementById("dash-header").style.backgroundSize = "70%"
   document.getElementById("dash-header").style.backgroundPosition = "center"
   document.querySelector(".dash-cit-header").style.color = "#BD2E4E"; 
   document.querySelector("#objectif").style.color = "#BD2E4E";
   document.querySelector(".dash-header-notebook").style.color = "#BD2E4E";
   document.querySelector("#auteur").style.color = "#BD2E4E";
}
if ( humeur === "Stressé.e" ) {
   document.getElementById("dash-mood-tag").style.backgroundColor = "#fffefe28";
   document.getElementById("dash-header").style.backgroundImage = "url(stresse.jfif)"
   document.getElementById("dash-header").style.backgroundSize = "100%"
   document.getElementById("dash-header").style.backgroundPosition = "center"
   document.querySelector(".dash-cit-header").style.color = "#C57451"; 
   document.querySelector("#objectif").style.color = "#C57451";
   document.querySelector(".dash-header-notebook").style.color = "#C57451";
   document.querySelector("#auteur").style.color = "#C57451";
}
if ( humeur === "Fâché.e" ) {
   document.getElementById("dash-mood-tag").style.backgroundColor = "#fffefe28";
   document.getElementById("dash-header").style.backgroundImage = "url(colere.jfif)"
   document.getElementById("dash-header").style.backgroundSize = "50%"
   document.getElementById("dash-header").style.backgroundPosition = "center"
   document.querySelector(".dash-cit-header").style.color = "#922b21"; 
   document.querySelector("#objectif").style.color = "#922b21";
   document.querySelector(".dash-header-notebook").style.color = "#922b21";
   document.querySelector("#auteur").style.color = "#922b21";
}
if ( humeur === "Frustré.e" ) {
   document.getElementById("dash-mood-tag").style.backgroundColor = "#fffefe28";
   document.getElementById("dash-header").style.backgroundColor = "#9E4F4F"
   document.getElementById("dash-header").style.backgroundSize = "50%"
   document.getElementById("dash-header").style.backgroundPosition = "center"
   document.querySelector(".dash-cit-header").style.color = "#922b21"; 
   document.querySelector("#objectif").style.color = "#922b21";
   document.querySelector(".dash-header-notebook").style.color = "#922b21";
   document.querySelector("#auteur").style.color = "#922b21";
}

function f1() {
   alert(`Bravooo vous avez boosté votre mood 🎉`);
   alert(`Merci d'avoir utiliser MoodQuote á la prochaine 👋`);
   location.replace("Login.html");
}
