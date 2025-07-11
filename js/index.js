function createCard(itemData) {
    // Create card
    const card = document.createElement("div");
    const cardList = document.getElementById("cardList");
    cardList.appendChild(card);
    card.classList.add("card");

    // Create card header
    const cardHeader = document.createElement("div");
    card.appendChild(cardHeader);
    cardHeader.classList.add("card-header");

    // Create card img
    const cardImg = document.createElement("img");
    cardHeader.appendChild(cardImg);
    cardImg.classList.add("card-img");
    cardImg.src = `../img/${itemData.prenom}.png`;
    cardImg.alt = `${itemData.prenom} ${itemData.nom}`;

    // Create card body
    const cardBody = document.createElement("div");
    card.appendChild(cardBody);
    cardBody.classList.add("card-body");

    // Create card title
    const cardTitle = document.createElement("h2");
    cardBody.appendChild(cardTitle);
    cardTitle.classList.add("card-title");
    cardTitle.textContent = `${itemData.prenom} ${itemData.nom}`;

    // Age
    const cardAge = document.createElement("p");
    cardBody.appendChild(cardAge);
    cardAge.classList.add("cardage");
    cardAge.textContent = `Âge : ${itemData.age}`;

    // Ville
    const cardVille = document.createElement("p");
    cardBody.appendChild(cardVille);
    cardVille.classList.add("cardage");
    cardVille.textContent = `Ville : ${itemData.ville}`;

    // Description
    const cardDescription = document.createElement("p");
    cardBody.appendChild(cardDescription);
    cardDescription.classList.add("card-description");
    cardDescription.textContent = itemData.presentation;
}

function createCardf(itemData) {
    // Create card
    const card = document.createElement("div");
    const cardList = document.getElementById("cardListf");
    cardList.appendChild(card);
    card.classList.add("cardf");

    // Create card header
    const cardHeader = document.createElement("div");
    card.appendChild(cardHeader);
    cardHeader.classList.add("card-header");

    // Create card img
    const cardImg = document.createElement("img");
    cardHeader.appendChild(cardImg);
    cardImg.classList.add("card-imgf");
    cardImg.src = `../img/${itemData.prenom}.png`;
    cardImg.alt = `${itemData.prenom} ${itemData.nom}`;

    // Create card body
    const cardBody = document.createElement("div");
    card.appendChild(cardBody);
    cardBody.classList.add("card-body");

    // Create card title
    const cardTitle = document.createElement("h2");
    cardBody.appendChild(cardTitle);
    cardTitle.classList.add("card-title");
    cardTitle.textContent = `${itemData.prenom} ${itemData.nom}`;

    // Age
    const cardAge = document.createElement("p");
    cardBody.appendChild(cardAge);
    cardAge.classList.add("cardage");
    cardAge.textContent = `Âge : ${itemData.age}`;

    // Ville
    const cardVille = document.createElement("p");
    cardBody.appendChild(cardVille);
    cardVille.classList.add("cardage");
    cardVille.textContent = `Ville : ${itemData.ville}`;

    // Description
    const cardDescription = document.createElement("p");
    cardBody.appendChild(cardDescription);
    cardDescription.classList.add("card-description");
    cardDescription.textContent = itemData.presentation;
}
const formateur = [
    {
        nom: "Guerre",
        prenom: "Robin",
        ville: "Epernay",
        age: "NC",
        presentation: "Je me bats contre le code, je ne gagne pas toujours. Interdiction de faire du dev la nuit, ne me parlez pas d'Objet à 4h du matin. Addict à React (mais pas à Facebook), débute sur Unity, passe trop de temps devant les écrans.",
    }
];
const donneesPromo = [
    {
        nom: "Khaliev",
        prenom: "Adlan",
        ville: "Reims",
        age: "32 ans",
        presentation: "Futur spécialiste en développement web.",
    },
    {
        nom: "El Amri",
        prenom: "Ahmed",
        ville: "Reims",
        age: "31 ans",
        presentation: "Je travaillais comme technicien frigoriste et suis actuellement en reconversion pour devenir développeur mes loisirs c'est les jeux vidéos et les voyages.",
    },
    {
        nom: "Avril",
        prenom: "Alexis",
        ville: "Charleville-Mézières",
        age: "NC",
        presentation: "J'ai fait mes études à Épernay en immobilier. J'ai toujours été passionné par l'informatique.",
    },
    {
        nom: "Tahakourt",
        prenom: "Amar",
        ville: "Reims",
        age: "NC",
        presentation: "Formateur informatique et internet. Tous âges tous niveaux. Pour qu'internet soit accessible à tous !",
    },
    {
        nom: "Carenjot",
        prenom: "Aurelien",
        ville: "Reims",
        age: "25 ans",
        presentation: "Curieux par nature et le savoir n'attend personne !",
    },
    {
        nom: "Dubois",
        prenom: "Christophe",
        ville: "Rilly la montagne",
        age: "34 ans",
        presentation: "Je suis papa d’un enfant qui s’appelle Noé (choix de la maman mon choix était Tetsuya ). J’aime être solitaire et me débrouiller tout seul, ce qui ne veut pas dire que je suis insociable.",
    },
    {
        nom: "Kleczynski",
        prenom: "Celia",
        ville: "Reims",
        age: "20 ans",
        presentation: "Je suis née dans l'informatique et en particulier les jeux vidéos depuis mon plus jeune âge, j'ai un magnifique chien qui fait mon bonheur de tous les jours ainsi que mon copain sans eux, je n'en serais pas arrivée jusqu'ici.",
    },
    {
        nom: "Petit",
        prenom: "Elisa",
        ville: "Reims",
        age: "NC",
        presentation: "J'aime découvrir et apprendre de nouvelles choses, et dormir beaucoup.",
    },
    {
        nom: "Jehl",
        prenom: "Elodie",
        ville: "Friesenheim (67)",
        age: "31 ans",
        presentation: "Curieuse, je me débrouille dans toutes situations.",
    },
    {
        nom: "Andre",
        prenom: "Enzo",
        ville: "Murigny (Reims)",
        age: "22 ans",
        presentation: "Je suis quelqu'un de jovial qui peut quelques fois avoir envie de rester seul quelques fois. J'aime beaucoup la pop culture et le sport. J'ai 2 frères et un chien. ",
    },
    {
        nom: "Thiry",
        prenom: "Maximilien",
        ville: "Pays Sedenais(08)",
        age: "3.4 ans",
        presentation: "Zeima,Codeur fou,membre d'une jeune chambre economique,activiste du libre. Comique a ces heures perdu et dors de trop ou regarde de trop Koseki Bijou en Stream(Otaku aussi)",

    },
    {
        nom: "Fourny",
        prenom: "Nadege",
        ville: "Damery village à proximité d'Epernay (9km)",
        age: "NC",
        presentation: "Je suis en reconversion professionnelles, et j'ai participer à l'initiation pour comprendre le JS.",
    },
    {
        nom: "Wati",
        prenom: "Rina",
        ville: "Reims",
        age: "NC",
        presentation: "Passionnée sur digital et web.",
    },
    {
        nom: "Caqueux",
        prenom: "Nils",
        ville: "Charleville",
        age: "21 ans",
        presentation: "🐧 Je suis un Otaku 🐧",
    },
    {
        nom: "Milianni",
        prenom: "Samir",
        ville: "Châlons-en-Champagne",
        age: "34 ans",
        presentation: "Je suis rentré dans l'univers du dev il y a 2 ans de ça, depuis ce jour, je vais de forums en forums de conférences en conférences pour comprendre et pouvoir apprendre le langage web déjà formé au HTML 5 ET CSS3. J'ai eu la chance de faire partie de cette prépa qui m'a permis de vous rencontrer et apprendre du langage fontend.",
    },
]
// function forma() {
for (let i = 0; i < formateur.length; i++) {
    createCardf(formateur[i]);
}
// }

// function promo() {
for (let i = 0; i < donneesPromo.length; i++) {
    createCard(donneesPromo[i]);
}
// }
