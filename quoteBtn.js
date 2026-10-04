const offerForm = document.querySelector("#offerForm");
const offerBtn = document.querySelector(".offerBtn");
const closeOfferForm = document.querySelector(".close-btn");
const formContent = document.querySelector(".form-content");
const leadForm = document.querySelector("#leadform")

function openForm() {
    offerForm.style.display = "flex";
}

function closeForm() {
    offerForm.style.display = "none";
}

offerBtn.addEventListener("click", openForm);
closeOfferForm.addEventListener("click", closeForm)


document.addEventListener("click", function(event){     //stänga fönster när man klickar utanför formuläret
    if (offerForm.style.display === "flex") {
        const isClickInside = formContent.contains(event.target);
        const isClickOnOpen = offerBtn.contains(event.target);

        if (!isClickInside && !isClickOnOpen){
            closeForm();
        }
    }
});

if (leadForm) {
    leadForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Stoppar standardbeteendet (som orsakar kraschen)

        // Hämta datan om du vill använda den
        const formData = new FormData(leadForm);
        const data = Object.fromEntries(formData);
        console.log("Skickat:", data);

        // TODO: Här kan du lägga till fetch() för att skicka datan till en server/backend om önskvärt

        // Ge enkel återkoppling, stäng formuläret och nollställ fälten
        alert("Tack för din förfrågan! Vi återkommer inom kort.");
        closeForm();
        leadForm.reset();
    });
}
