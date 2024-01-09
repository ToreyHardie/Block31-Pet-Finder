document.addEventListener('DOMContentLoaded', function () {
    
    fetchPets();
});


function fetchPets() {
    fetch('/api/v1/pets')
        .then(response => response.json())
        .then(pets => displayPets(pets))
        .catch(error => console.error('Error fetching pets:', error));
}




function displayPets(pets) {
    const petsList = document.getElementById('petsList');

    
    const tableHeader = `<tr><th>Name</th><th>Breed</th><th>Owner</th><th>Age</th></tr>`;
    const tableRows = pets.map(pet => `<tr><td>${pet.name}</td><td>${pet.breed}</td><td>${pet.owner}</td><td>${pet.age}</td></tr>`);
    petsList.innerHTML = `<table>${tableHeader}${tableRows.join('')}</table>`;
}