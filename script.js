const API_URL = "https://countries.dev/countries";

// Tous les pays reçus de l'API (rempli une seule fois, au chargement)
let allCountries = [];
const cartesContainer = document.getElementById("cartesContainer");
cartesContainer.classList.add("cartesContainer");

// TODO : récupère ici les éléments du DOM dont tu as besoin

/**
 * Récupère tous les pays depuis l'API.
 * - Utilise fetch avec async/await.
 * - Appelée UNE SEULE FOIS, au chargement de la page.
 *
 * @returns {Promise<Array>} Le tableau de tous les pays.
 */
async function fetchCountries() {
  try {
    const response = await fetch("https://countries.dev/countries");
    const data = await response.json();
    allCountries.push(...data);
    displayCountries();
    console.log(allCountries);
  } catch (erreur) {
    alert("erreur");
  }
}
fetchCountries();

/**
 * Crée la carte HTML d'un pays, sur le modèle de la maquette :
 * drapeau (avec un texte alternatif utile), nom, capitale, population.
 *
 * @param {Object} country - Un pays tel que renvoyé par l'API.
 * @returns {HTMLElement} La carte, prête à être ajoutée à la grille.
 */
function createCountryCard(country) {
  // TODO
}

/**
 * Affiche une liste de pays dans la grille.
 * - Vide d'abord la grille (sinon les cartes s'accumulent).
 * - Ajoute une carte par pays.
 * - Si la liste est vide, affiche le message « Aucun pays ne correspond ».
 *
 * @param {Array} countries - Les pays à afficher.
 */
function displayCountries() {
  allCountries.forEach((pays) => {
    const carte = document.createElement("article");
    carte.classList.add("carte");

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = pays.flags;
    image.alt = "thumbnail";
    carte.appendChild(image);

    const textContainer = document.createElement("div");
    textContainer.classList.add("textsContainer");
    carte.appendChild(textContainer);

    const country = document.createElement("h2");
    country.classList.add("h2");
    country.textContent = pays.name;
    carte.appendChild(country);

    const capitaleContainer = document.createElement("div");
    capitaleContainer.classList.add("capitale");
    carte.appendChild(capitaleContainer);

    const capitale = document.createElement("p");
    capitale.classList.add("p");
    capitale.textContent = "capitale";
    capitaleContainer.appendChild(capitale);

    const capitaleName = document.createElement("h5");
    capitaleName.classList.add("h5");
    capitaleName.textContent = pays.cioc;
    capitaleContainer.appendChild(capitaleName);

    const populationContainer = document.createElement("div");
    populationContainer.classList.add("population");
    carte.appendChild(populationContainer);

    const population = document.createElement("p");
    population.classList.add("p");
    population.textContent = "population";
    populationContainer.appendChild(population);

    const populationNbre = document.createElement("h5");
    populationNbre.classList.add("h5");
    populationNbre.textContent = pays.area;
    populationContainer.appendChild(populationNbre);

    cartesContainer.appendChild(carte);
  });
}

/**
 * Applique les deux filtres EN MÊME TEMPS sur allCountries :
 * - le continent choisi dans la liste déroulante ;
 * - le texte saisi dans la recherche (majuscules et minuscules ignorées).
 * Puis affiche le résultat avec displayCountries().
 *
 * Aucune requête vers l'API ici !
 */
function filterCountries() {
  // TODO
}

// ------------------------------------------------------------
// BONUS
// ------------------------------------------------------------

/**
 * (Bonus) Trie des pays par population, du plus peuplé au moins peuplé.
 * Attention : ne modifie pas le tableau allCountries d'origine.
 *
 * @param {Array} countries
 * @returns {Array} Un nouveau tableau trié.
 */
function sortByPopulation(countries) {
  // TODO
}

/**
 * (Bonus) Affiche ou masque le message « Chargement des pays… ».
 *
 * @param {boolean} isLoading - true pour l'afficher, false pour le masquer.
 */
function showLoader(isLoading) {
  // TODO
}

/**
 * (Bonus) Affiche un message d'erreur clair quand l'API ne répond pas.
 *
 * @param {string} message
 */
function showError(message) {
  // TODO
}

// ------------------------------------------------------------
// DÉMARRAGE
// ------------------------------------------------------------

/**
 * Point d'entrée de l'application :
 * 1. récupère les pays avec fetchCountries() et les stocke dans allCountries ;
 * 2. affiche les pays du continent sélectionné par défaut ;
 * 3. écoute les changements de continent et la saisie dans la recherche.
 *
 * (Bonus) Gère le chargement et les erreurs avec try...catch.
 */
async function init() {
  // TODO
}

init();
