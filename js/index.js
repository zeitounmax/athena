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
    cardImg.setAttribute("style", `background-image: url('../img/${itemData.prenom}.png');`);

    // Create card body
    const cardBody = document.createElement("div");
    card.appendChild(cardBody);
    cardBody.classList.add("card-body");

    // Create card title
    const cardTitle = document.createElement("h2");
    cardBody.appendChild(cardTitle);
    cardTitle.classList.add("card-title");
    cardTitle.textContent = `${itemData.prenom} ${itemData.nom}`;

    // Create card title
    const cardage = document.createElement("p");
    cardBody.appendChild(cardage);
    cardage.classList.add("cardage");
    cardage.textContent = `Age: ${itemData.age}`;

    // Create card ville
    const cardageVille = document.createElement("p");
    cardBody.appendChild(cardage);
    cardage.classList.add("cardage");
    cardage.textContent = `Ville: ${itemData.ville}`;

    // Create card description
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
    cardImg.setAttribute("style", `background-image: url('../img/${itemData.prenom}.png');`);

    // Create card body
    const cardBody = document.createElement("div");
    card.appendChild(cardBody);
    cardBody.classList.add("card-body");

    // Create card title
    const cardTitle = document.createElement("h2");
    cardBody.appendChild(cardTitle);
    cardTitle.classList.add("card-title");
    cardTitle.textContent = `${itemData.prenom} ${itemData.nom}`;

    // Create card title
    const cardage = document.createElement("p");
    cardBody.appendChild(cardage);
    cardage.classList.add("cardage");
    cardage.textContent = `Age: ${itemData.age}`;

    // Create card ville
    const cardageVille = document.createElement("p");
    cardBody.appendChild(cardage);
    cardage.classList.add("cardage");
    cardage.textContent = `Ville: ${itemData.ville}`;

    // Create card description
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
        presentation: "Je me bats contre le code, je ne gagne pas toujours. Interdiction de faire du dev la nuit, ne me parlez pas d'Objet ?? 4h du matin. Addict ?? React (mais pas ?? Facebook), d??bute sur Unity, passe trop de temps devant les ??crans.",
    }
];
const donneesPromo = [
    {
        nom: "Khaliev",
        prenom: "Adlan",
        ville: "Reims",
        age: "32 ans",
        presentation: "Futur sp??cialiste en d??veloppement web.",
    },
    {
        nom: "El Amri",
        prenom: "Ahmed",
        ville: "Reims",
        age: "31 ans",
        presentation: "Je travaillais comme technicien frigoriste et suis actuellement en reconversion pour devenir d??veloppeur mes loisirs c'est les jeux vid??os et les voyages.",
    },
    {
        nom: "Avril",
        prenom: "Alexis",
        ville: "Charleville-M??zi??res",
        age: "NC",
        presentation: "J'ai fait mes ??tudes ?? ??pernay en immobilier. J'ai toujours ??t?? passionn?? par l'informatique.",
    },
    {
        nom: "Tahakourt",
        prenom: "Amar",
        ville: "Reims",
        age: "NC",
        presentation: "Formateur informatique et internet. Tous ??ges tous niveaux. Pour qu'internet soit accessible ?? tous !",
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
        presentation: "Je suis papa d???un enfant qui s???appelle No?? (choix de la maman mon choix ??tait Tetsuya ). J???aime ??tre solitaire et me d??brouiller tout seul, ce qui ne veut pas dire que je suis insociable.",
    },
    {
        nom: "Kleczynski",
        prenom: "Celia",
        ville: "Reims",
        age: "20 ans",
        presentation: "Je suis n??e dans l'informatique et en particulier les jeux vid??os depuis mon plus jeune ??ge, j'ai un magnifique chien qui fait mon bonheur de tous les jours ainsi que mon copain sans eux, je n'en serais pas arriv??e jusqu'ici.",
    },
    {
        nom: "Petit",
        prenom: "Elisa",
        ville: "Reims",
        age: "NC",
        presentation: "J'aime d??couvrir et apprendre de nouvelles choses, et dormir beaucoup.",
    },
    {
        nom: "Jehl",
        prenom: "Elodie",
        ville: "Friesenheim (67)",
        age: "31 ans",
        presentation: "Curieuse, je me d??brouille dans toutes situations.",
    },
    {
        nom: "Andre",
        prenom: "Enzo",
        ville: "Murigny (Reims)",
        age: "22 ans",
        presentation: "Je suis quelqu'un de jovial qui peut quelques fois avoir envie de rester seul quelques fois. J'aime beaucoup la pop culture et le sport. J'ai 2 fr??res et un chien. ",
    },
    {
        nom: "Thiry",
        prenom: "Maximilien",
        ville: "Charleville-M??zi??res",
        age: "32 ans",
        presentation: "Juste un type qui essaie de coder et qui est sympa.",

    },
    {
        nom: "Fourny",
        prenom: "Nadege",
        ville: "Damery village ?? proximit?? d'Epernay (9km)",
        age: "NC",
        presentation: "Je suis en reconversion professionnelles, et j'ai participer ?? l'initiation pour comprendre le JS.",
    },
    {
        nom: "Wati",
        prenom: "Rina",
        ville: "Reims",
        age: "NC",
        presentation: "Passionn??e sur digital et web.",
    },
    {
        nom: "Caqueux",
        prenom: "Nils",
        ville: "Charleville",
        age: "21 ans",
        presentation: "???? Je suis un Otaku ????",
    },
    {
        nom: "Milianni",
        prenom: "Samir",
        ville: "Ch??lons-en-Champagne",
        age: "34 ans",
        presentation: "Je suis rentr?? dans l'univers du dev il y a 2 ans de ??a, depuis ce jour, je vais de forums en forums de conf??rences en conf??rences pour comprendre et pouvoir apprendre le langage web d??j?? form?? au HTML 5 ET CSS3. J'ai eu la chance de faire partie de cette pr??pa qui m'a permis de vous rencontrer et apprendre du langage fontend.",
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
