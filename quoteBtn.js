// Hämta elementen
const modal = document.getElementById("offerModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close-btn")[0];

// När man klickar på "Offert"-knappen -> visa rutan
btn.onclick = function(e) {
    e.preventDefault(); // Hindrar länkens standardbeteende
    modal.style.display = "flex";
}

// När man klickar på krysset (X) -> stäng rutan
span.onclick = function() {
    modal.style.display = "none";
}

// När man klickar utanför själva rutan (på den mörka bakgrunden) -> stäng rutan
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}