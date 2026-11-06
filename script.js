
// Crop Information Database
const crops = {
    rice: {
        name: "Rice",
        season: "Kharif",
        soil: "Clay and loamy soil",
        water: "High water requirement",
        temperature: "20°C - 35°C"
    },
    wheat: {
        name: "Wheat",
        season: "Rabi",
        soil: "Well-drained loamy soil",
        water: "Moderate water requirement",
        temperature: "10°C - 25°C"
    },
    maize: {
        name: "Maize",
        season: "Kharif and Rabi",
        soil: "Well-drained fertile soil",
        water: "Moderate water requirement",
        temperature: "18°C - 27°C"
    },
    sugarcane: {
        name: "Sugarcane",
        season: "Annual crop",
        soil: "Deep fertile loamy soil",
        water: "High water requirement",
        temperature: "20°C - 35°C"
    },
    cotton: {
        name: "Cotton",
        season: "Kharif",
        soil: "Black cotton soil",
        water: "Moderate water requirement",
        temperature: "21°C - 30°C"
    },
    ragi: {
        name: "Ragi",
        season: "Kharif",
        soil: "Red and well-drained soil",
        water: "Low to moderate water requirement",
        temperature: "20°C - 30°C"
    }
};

// Crop Search
function searchCrop() {
    const input = document.getElementById("cropSearch")
        .value.trim().toLowerCase();

    const result = document.getElementById("cropResult");

    if (crops[input]) {
        const crop = crops[input];

        result.innerHTML = `
            <h3>${crop.name}</h3>
            <p><b>Season:</b> ${crop.season}</p>
            <p><b>Soil:</b> ${crop.soil}</p>
            <p><b>Water:</b> ${crop.water}</p>
            <p><b>Temperature:</b> ${crop.temperature}</p>
        `;
    } else {
        result.textContent =
            "Crop not found. Try Rice, Wheat, Maize, Sugarcane, Cotton or Ragi.";
    }
}

// Fertilizer Calculator
function calculateFertilizer() {
    const area = Number(document.getElementById("area").value);
    const rate = Number(document.getElementById("rate").value);
    const result = document.getElementById("fertilizerResult");

    if (!Number.isFinite(area) || !Number.isFinite(rate) ||
        area <= 0 || rate < 0) {
        result.textContent = "Please enter a valid area and fertilizer rate.";
        return;
    }

    const total = area * rate;

    result.textContent =
        "Required fertilizer: " + total.toFixed(2) + " kg";
}

// Random Farming Tips
const tips = [
    "Test your soil before applying fertilizers.",
    "Use drip irrigation to save water.",
    "Practice crop rotation to improve soil health.",
    "Choose quality seeds for better crop production.",
    "Remove weeds regularly to protect crops.",
    "Use compost to improve soil fertility.",
    "Monitor crops regularly for pest attacks.",
    "Avoid over-irrigation to protect plant roots.",
    "Maintain proper spacing between plants.",
    "Use integrated pest management practices."
];

function generateTip() {
    const random = Math.floor(Math.random() * tips.length);

    document.getElementById("tip").textContent = tips[random];
}

// Interactive Image Gallery
function showImage(image) {
    document.getElementById("modalImage").src = image.src;
    document.getElementById("imageModal").style.display = "flex";
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}

// Search using Enter key
document.getElementById("cropSearch")
    .addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchCrop();
        }
    });
