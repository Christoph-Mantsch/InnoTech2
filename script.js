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
