const cars = [
    { id: 1, name: "Honda Civic", type: "Sedan", price: "R$ 150/dia", image: "images/honda-civic.jpg"},
    { id: 2, name: "Toyota Corolla", type: "Sedan", price: "R$ 200/dia", image: "images/toyota-corolla.jpg"},
    { id: 3, name: "Chevrolet Tracker", type: "SUV", price: "R$ 180/dia", image: "images/chevrolet-tracker.jpg"},
    { id: 4, name: "Jeep Renegade", type: "SUV", price: "R$ 200/dia", image: "images/jeep-renegade.jpg"},
    { id: 5, name: "Fiat Argo", type: "Hatchback", price: "R$ 120/dia", image: "images/fiat-argo.jpg"},
    { id: 6, name: "Chevrolet Onix", type: "Hatchback", price: "R$ 130/dia", image: "images/chevrolet-onix.jpg"},
    { id: 7, name: "Fiat Toro", type: "Picape", price: "R$ 230/dia", image: "images/fiat-toro.jpg"},
    { id: 8, name: "Toyota Hilux", type: "Picape", price: "R$ 250/dia", image: "images/toyota-hilux.jpg"}
];

function displayCars() {
    const carList = document.getElementById("car-list");
    carList.innerHTML = "";
    cars.forEach(car => {
        const carItem = document.createElement("div");
        carItem.className = "car-item";
        carItem.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class="car-image">
            <h3>${car.name}</h3>
            <p>Tipo: ${car.type}</p>
            <p>Preço: ${car.price}</p>
            <button onclick="selectCar('${car.name}')">Selecionar</button>
        `;
        carList.appendChild(carItem);
    });

    const carSelect = document.getElementById("car");
    cars.forEach(car => {
        const option = document.createElement("option");
        option.value = car.name;
        option.textContent = car.name;
        carSelect.appendChild(option);
    });
}

function selectCar(carName) {
    const carSelect = document.getElementById("car");
    carSelect.value = carName;
}

document.getElementById("reservation-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Reserva enviada com sucesso!");
});

document.addEventListener("DOMContentLoaded", displayCars);