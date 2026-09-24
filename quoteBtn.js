const offerForm = document.querySelector("#offerForm");
const offerBtn = document.querySelector(".offerBtn");
const closeOfferForm = document.querySelector(".close-btn");
const formContent = document.querySelector(".form-content")

function openForm() {
    offerForm.style.display = "flex";
}

function closeForm() {
    offerForm.style.display = "none";
}


offerBtn.addEventListener("click", function(event){ 
    openForm();
    event.stopPropagation();
});

if (closeOfferForm) {
    closeOfferForm.addEventListener("click", closeForm)
}

document.addEventListener("click", function(event){     //stänga fönster när man klickar utanför formuläret
    if (offerForm.style.display === "flex") {
        const isClickInside = formContent.contains(event.target);
        const isClickOnOpen = offerBtn.contains(event.target);

        if (!isClickInside && !isClickOnOpen){
            closeForm();
        }
    }
});
