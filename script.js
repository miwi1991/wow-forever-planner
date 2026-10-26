const spieler = [
    "Tim",
    "Christoph",
    "Benni",
    "Lucas",
    "Michi"
];

const klassen = [
    "Krieger",
    "Paladin",
    "Jäger",
    "Schurke",
    "Priester",
    "Schamane",
    "Magier",
    "Hexenmeister",
    "Druide"
];


const container = document.getElementById("spieler-container");


spieler.forEach(name => {

    const karte = document.createElement("div");
    karte.className = "player";

    karte.innerHTML = `
        <h3>${name}</h3>

        Wunschklasse 1:
        ${erstelleAuswahl()}

        <br><br>

        Wunschklasse 2:
        ${erstelleAuswahl()}

        <br><br>

        Wunschklasse 3:
        ${erstelleAuswahl()}
    `;

    container.appendChild(karte);

});


function erstelleAuswahl() {

    let html = `
        <select>
            <option>-- wählen --</option>
    `;

    klassen.forEach(klasse => {
        html += `
            <option>${klasse}</option>
        `;
    });

    html += `
        </select>
    `;

    return html;
}
