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
${erstelleAuswahl("haupt")}

<br><br>

Wunschklasse 2:
${erstelleAuswahl("optional")}

<br><br>

Wunschklasse 3:
${erstelleAuswahl("optional")}
    `;

    container.appendChild(karte);

});


function erstelleAuswahl(typ) {

    let html = `
<select onchange="klasseGewählt(this)" data-typ="${typ}">
            <option value="">-- wählen --</option>
    `;

    Object.keys(klassen).forEach(klasse => {
        html += `
            <option value="${klasse}">${klasse}</option>
        `;
    });

    html += `
        </select>
    `;

    return html;
}


function klasseGewählt(select) {

    const karte = select.closest(".player");

    if (select.dataset.typ !== "haupt") {
        return;
    }

    const klasse = select.value;

    if (klasse === "") {
        karte.style.borderColor = "#444";
        karte.style.boxShadow = "none";
        return;
    }

    karte.style.borderColor = klassen[klasse];
    karte.style.boxShadow = `0 0 15px ${klassen[klasse]}`;
}
