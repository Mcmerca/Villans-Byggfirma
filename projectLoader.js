const template = document.querySelector("#project-template");


function getProjects(project){
    const clone = template.content.cloneNode(true);
    const title = clone.querySelector(".project-title");
    const desc = clone.querySelector(".project-desc");
    const year = clone.querySelector(".project-year");
    
    const projectImage = clone.querySelector(".project-img");
    const activeImage = clone.querySelector(".active-img");
    
    title.textContent = project.title;
    desc.textContent = project.description;
    year.textContent = project.year;

    projectImage.src = project.images[0];

        if (project.images.length > 1) {
            imageSlideshow(clone, project.images);
        }

    return clone;
}

function imageSlideshow(card, images) {
    const dotsContainer = card.querySelector(".slideshow-dots");
    const img = card.querySelector(".project-img");
    const cardContainer = card.querySelector(".project-card")
    let currentIndex = 0;
    let timer;

    images.forEach((_image, index) => { /*Note to self, ska denna verkligen vara en forEach?*/
        const span = document.createElement("span");
        dotsContainer.appendChild(span);
    });

    dotsContainer.querySelector("span").classList.add("active-dot");

    cardContainer.addEventListener("mouseenter", () => {
        console.log("Musen hovrar")
        timer = setInterval(() => {
            currentIndex++
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }

            img.src = images[currentIndex];

            const allDots = dotsContainer.querySelectorAll("span");
            allDots.forEach(dot => {
                dot.classList.remove("active-dot");
            });

            allDots[currentIndex].classList.add("active-dot");

        }, 1500);
    });

    cardContainer.addEventListener("mouseleave", () => {
        console.log("Musen har slutat att hovra")
        clearInterval(timer);
    });

}





fetch("projects.json")
    .then(response => response.json())
    .then (projects => {
        projects.slice(0, 3).forEach(project => {
            const card = getProjects(project);
            document.querySelector("#projects-grid").appendChild(card);
        });
    })