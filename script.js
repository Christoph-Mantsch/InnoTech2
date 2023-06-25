// Generate the fields dynamically
const container = document.getElementById('field-container');
for (let i = 1; i <= 9; i++) {
    const field = document.createElement('div');
    field.classList.add('field');
    field.id = 'field-' + i;
    container.appendChild(field);
}

// Example: Set field 1 as occupied
document.getElementById('field-1').classList.add('occupied');

// Example: Handle field click event
document.getElementById('field-1').addEventListener('click', handleFieldClick);

function handleFieldClick(event) {
    const field = event.target;
    field.classList.toggle('occupied');
}
const fs = require('fs');

// Pfad zur JSON-Datei
const filePath = 'E:\InnoTech2\InnoTech2\test';

// Lesen der JSON-Datei
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Die JSON-Datei kann nicht eingelesen werden', err);
    return;
  }

  // Verarbeiten der JSON-Daten
  const jsonData = JSON.parse(data);
  console.log('JSON-Daten:', jsonData);

  // Codeausführung zu Verarbeitung des Codes
});