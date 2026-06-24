const pets = new Array();

function Pet(name, chip) {
    this.name = name;
    this.chip = chip;
}

function validateChip(chip) {
    const regex = new RegExp("^[0-9]{4}$");
    return regex.test(chip);
}

function renderList() {
    const listElement = document.getElementById("petList");
    listElement.innerHTML = "";

    for (let i = 0; i < pets.length; i++) {
        const li = document.createElement("li");
        li.textContent = `Mascota: ${pets[i].name} | Chip: ${pets[i].chip}`;
        listElement.appendChild(li);
    }
}

function addPet() {
    const nameInput = document.getElementById("petName").value;
    const chipInput = document.getElementById("petChip").value;

    if (nameInput !== "" && validateChip(chipInput)) {
        const newPet = new Pet(nameInput, chipInput);
        pets.push(newPet);
        renderList();
    } else {
        alert("Datos no válidos");
    }
}

function sortPets() {
    pets.sort((a, b) => a.name.localeCompare(b.name));
    renderList();
}

const titulo = document.getElementsByTagName("h1")[0];
titulo.style.color = "blue";

const botones = document.getElementsByTagName("button");

const btnAdd = document.getElementById("btnAdd");
const btnSort = document.getElementById("btnSort");
const btnDelete = document.getElementById("btnDelete");

btnAdd.addEventListener("click", addPet);
btnSort.onclick = sortPets;

btnDelete.onclick = () => {
    pets.length = 0;
    renderList();
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("App lista");
});