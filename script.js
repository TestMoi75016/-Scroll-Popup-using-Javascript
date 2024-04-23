// Créer un événement au scroll

// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Utiliser un boléen pour faire dispataitre pr tjr la popup quand on clicke sur la croix

let playOnce = true; // utilisation d'un booléen pour JOUER UNE SEULE FOIS UN EVENEMENT, de base sur true

//Reduire la height de navbar quand on scroll vers le bas et la remettre height normal tout en haut
window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  if (window.scrollY > 0) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }
});

//Faire apparaitre l'image
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 250) {
    imgImprovise.style.transform = "translateX(0px)";
    imgImprovise.style.opacity = "1";
  }
});

// OU : Quand la page est moins large le niveau de scroll est pas le même. Méthode pour contrer cela: le %:
// window.addEventListener("scroll", (e) => {
//   let scrollValue =
//     (window.scrollY + window.innerHeight) / document.body.offsetHeight;
//   console.log(scrollValue);

//   if (scrollValue > 0.45) {
//     imgImprovise.style.transform = "none";
//     imgImprovise.style.opacity = "1";
//   }
// });

//Faire apparaitre la popup
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 1350 && playOnce) {
    // "&&"= si et SEULEMENT SI les deux conditions sont vraies , donc si playOnce est true et que scrollY est > 1350 alors on montre la popup
    popup.style.transform = "translateX(0px)";
    popup.style.opacity = "1";
    playOnce = false; // une fois l'image sortie playOnce = false, dc condition respecté qu'à moitié donc event d'affichage de la popup ne fonctionnera qu'une fois et pas en boucle. Donc si l'on cache à nouveau la popup elle ne ressortira pas si l'on scroll vers le haut
  }
});

//OU-2 : Comme plus haut mais en %:
// window.addEventListener("scroll", (e) => {
//   let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
//   console.log(scrollValue);

//   if (scrollValue > 0.85) {
//     popup.style.transform = "none";
//     popup.style.opacity = "1";
//   }
// });

closeBtn.addEventListener("click", () => {
  //   console.log("je click");
  popup.style.transform = "translateX(400px)";
  popup.style.opacity = "0";
});

// Explications OU-2 % :
// On stock dans une variable la division : niveau de scroll actuel  + height de l'ascenseur de scroll  divisé par taille totale du scroll du body (document.body.offsetHeight).

// - On crée une variable qui s'appelle scrollValue
// - scrollValue = niveau de scroll + la height de scroll de l'ascenseur (innerHeight) DIVISISE parla height totale du body (offsetHeight)
// - Ce qui doit nous donner "1". "1" = 100% de la height du scroll.
//Pourquoi on ajoute innerHeight (height de l'ascenseur ? car il n'est pas prit en compte dans scrollY)
//Quand on log scrollValue et qu'on arrive tout en bas du scroll on a effectivement 1 (qui = 100% du scroll du body, sans l'ajout de la longeur de l'ascenseur on arrive pas à 100%)
// - Si scrollValue > 0.85 (donc 85% de la height totale du body) => on annule le transform: translateX et on affiche la popup
