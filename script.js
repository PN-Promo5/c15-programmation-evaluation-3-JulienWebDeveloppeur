// Declare body elt
var body = document.body;

// Ex 1:
//1.1
// Generate Interface 1
function generateHeader() {
    // Create header elt
    let header = document.createElement("header");
    // Add an id to header
    header.id = "header"
        // Create h1 elt
    let h1 = document.createElement("h1")
        // Add text content to elt
    h1.textContent = "Cinéma Le Dauphin";
    // Create p elt
    let p = document.createElement("p");
    // Add text content to elt
    p.textContent = "Une salle de cinéma grand confort, un restaurant et une\
sélection de vins de qualité. Des avant premières, des\
rencontres, des ciné-repas, des débats, des ateliers,\
des ciné-goûters, de 11h30 à 23h du mardi au\
dimanche (jusqu’à minuit le vendredi et le samedi)."
        // Create button elt
    let btn = document.createElement("button");
    btn.id = "see-more"
        // Add text content to elt
    btn.textContent = "Voir les films à l’affiche cette semaine";
    // Add elt to the dom
    body.appendChild(header);
    header.appendChild(h1);
    header.appendChild(p);
    header.appendChild(btn);
    // Add event listener on clik who display the table html and hidden header
    btn.addEventListener("click", function(e) {
        header.hidden = true;
        displayTable(moovieInfos);
    }, false)
}
generateHeader();

//1.2
// 2d Array
let moovieInfos = [
    ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
    ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
    ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
    ["WHAT YOU GONNA DO WHEN THE\
WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
    ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
]

// 1.3

function displayTable(table) {
    // Create div elt
    let container = document.createElement("div");
    // Add an Id
    container.id = "table";
    // create table elt
    let eltTable = document.createElement("table");
    // Create table head elt
    let tableHead = document.createElement("thead");
    // Create table body elt
    let tableBody = document.createElement("tbody");
    // Create table head row elt
    let tableHeadRow = document.createElement("tr");
    // Create table body row elt
    let tableBodyRow = document.createElement("tr");
    let currentElt;
    // Add all elt to dom
    body.appendChild(container);
    container.appendChild(eltTable);
    eltTable.appendChild(tableHead);
    tableHead.appendChild(tableHeadRow);
    eltTable.appendChild(tableBody);
    // Generate the thead
    for (let i = 0; i < table[0].length; i++) {
        currentElt = table[0][i];
        let tableHeadCell = document.createElement("th");
        tableHeadCell.textContent = currentElt;
        tableHeadRow.appendChild(tableHeadCell);
    } // generate the tbody
    for (let i = 1; i < table.length; i++) {
        currentElt = table[i];
        let tableBodyRow = document.createElement("tr");
        tableBody.appendChild(tableBodyRow);
        for (let j = 0; j < table[i].length; j++) {
            currentElt = table[i][j];
            let tableBodyCell = document.createElement("td");
            tableBodyCell.textContent = currentElt;
            tableBodyRow.appendChild(tableBodyCell);
        }
    }
    return eltTable;
}

// Exercice 2

//2.1 :
// 2d Array
let materialsInfos = [
    ["SUBSTANCES", "Température de fusion ou\
solidification en °C", "Température d’ébullition en °C"],
    ["acide acétique", "17", "118"],
    ["acide nitrique", "-41", "86"],
    ["acide sulfurique", "10", "290"],
    ["alcool éthylique", "-114", "78"],
    ["aluminium", "660", "2450"]
]

//2.2 :
/*retourne un tableau de chaînes de caractères contenant le nom des substances
dont la température d’ébullition en °C est inférieure au nombre passé en paramètre.*/
function sortMaterials(table, int) {
    // create empty array;
    let strTable = [];
    let currentElt;
    let temperature;
    let name;
    for (let i = 0; i < table.length; i++) {
        currentElt = table[i];
        temperature = table[i][2];
        name = table[i][0]
            // if int is lower than temperature add name to the array
        if (temperature < int) {
            strTable.push(name);
        }
    }
    // return str table
    return strTable;
}