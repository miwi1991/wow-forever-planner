const spieler = [
    "Tim",
    "Christoph",
    "Benni",
    "Lucas",
    "Michi"
];

const klassen = {
    "Krieger": "#C69B6D",
    "Paladin": "#F48CBA",
    "Jäger": "#AAD372",
    "Schurke": "#FFF468",
    "Priester": "#FFFFFF",
    "Schamane": "#0070DD",
    "Magier": "#3FC7EB",
    "Hexenmeister": "#8788EE",
    "Druide": "#FF7C0A"
};


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
