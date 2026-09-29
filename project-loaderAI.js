document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("projects-grid");
    const template = document.getElementById("project-template");

    fetch("projects.json")
        .then(response => response.json())
        .then(projects => {
            projects.slice(0, 3).forEach(project => {
                const clone = template.content.cloneNode(true);

                // Fyll i grundinfo
                clone.querySelector(".project-title").textContent = project.title;
                clone.querySelector(".project-desc").textContent = project.description;
                clone.querySelector(".project-year").textContent = project.year;

                const slideshowContainer = clone.querySelector(".slideshow-container");
                const firstImg = slideshowContainer.querySelector(".project-img");
                const dotsContainer = clone.querySelector(".slideshow-dots");

                let currentIndex = 0;
                let intervalId = null;
                const images = project.images;

                // Sätt första bilden
                firstImg.src = images[0];
                firstImg.alt = project.title;

                // Skapa bildelement och prickar för resten av bilderna (om det finns fler än 1)
                const imgElements = [firstImg];

                for (let i = 0; i < images.length; i++) {
                    // Skapa prick
                    const dot = document.createElement("span");
                    if (i === 0) dot.classList.add("active-dot");
                    dotsContainer.appendChild(dot);

                    if (i > 0) {
                        const img = document.createElement("img");
                        img.src = images[i];
                        img.alt = project.title;
                        slideshowContainer.insertBefore(img, dotsContainer);
                        imgElements.push(img);
                    }
                }

                const dots = dotsContainer.querySelectorAll("span");

                // Funktion för att byta bild
                function showImage(index) {
                    imgElements.forEach((img, idx) => {
                        img.classList.toggle("active-img", idx === index);
                        dots[idx].classList.toggle("active-dot", idx === index);
                    });
                }

                // Starta bildspel vid hovring
                const cardElement = clone.querySelector(".project-card");
                if (images.length > 1) {
                    cardElement.addEventListener("mouseenter", () => {
                        intervalId = setInterval(() => {
                            currentIndex = (currentIndex + 1) % images.length;
                            showImage(currentIndex);
                        }, 1500); // Byt bild var 1.5 sekund
                    });

                    cardElement.addEventListener("mouseleave", () => {
                        clearInterval(intervalId);
                        currentIndex = 0;
                        showImage(currentIndex); // Återställ till första bilden
                    });
                }

                grid.appendChild(clone);
            });
        })
        .catch(error => console.error("Kunde inte hämta projekt:", error));
});