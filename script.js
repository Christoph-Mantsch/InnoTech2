function loadAndDisplayData() {
  fetch('https://it2wi1.if-lab.de/rest/ft_ablauf')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector('#table-sm tbody');
      const hvertikal = 'H-vertikal'; // Hier die gewünschte Kategorie angeben
      const hhorizontal = 'H-horizontal';

      // Index des aktuellen Elements
      let currentIndex = 0;

      // Funktion zum Anzeigen des nächsten Werts
      function showNextValue() {
        const item = data[currentIndex];
        const row = document.createElement('tr');
        const Hvertikal = item.werte[hvertikal];
        const Hhorizontal = item.werte[hhorizontal];

        row.innerHTML = `
          <td style="background-color: #fff; color: #000000;">${item.datum}</td>
          <td style="background-color: #fff; color: #000000;">${Hvertikal}</td>
          <td style="background-color: #fff; color: #000000;">${Hhorizontal}</td>
        `;
        tableBody.innerHTML = ""; // Tabelle leeren
        tableBody.appendChild(row); // Neue Zeile hinzufügen

        // Aktuellen Index erhöhen
        currentIndex++;

        // Wenn alle Werte abgearbeitet wurden, Index zurücksetzen
        if (currentIndex >= data.length) {
          currentIndex = 0;
        }
      }

      // Start der Animation (alle 1 Sekunde)
      setInterval(showNextValue, 1000);
    })
    .catch(error => {
      console.log("Fehler beim Laden der JSON-Daten:", error);
    });
}