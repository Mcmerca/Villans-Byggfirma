
import {fetchProjects} from "./projectService.js";

const template = document.querySelector("#project-template");


function getProjects(project){
    const clone = template.content.cloneNode(true);
    const title = clone.querySelector(".project-title");
    const desc = clone.querySelector(".project-desc");
    const year = clone.querySelector(".project-year");
    const projectImage = clone.querySelector(".project-img");
    
    
    title.textContent = project.title;
    desc.textContent = project.description;
    year.textContent = project.year;
    projectImage.alt = project.title;
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

    images.forEach(() => { 
        const span = document.createElement("span");
        dotsContainer.appendChild(span);
    });

   const allDots = dotsContainer.querySelectorAll("span");
   if (allDots.length > 0) {
        allDots[0].classList.add("active-dot");
   }

    cardContainer.addEventListener("mouseenter", () => {
        timer = setInterval(() => {
            currentIndex++
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }

            img.src = images[currentIndex];

            allDots.forEach(dot => dot.classList.remove("active-dot"));
            allDots[currentIndex].classList.add("active-dot");

        }, 1500);
    });

    cardContainer.addEventListener("mouseleave", () => {
        clearInterval(timer);
        
        currentIndex = 0;
        img.src = images[0];
        
        allDots.forEach(dot => dot.classList.remove("active-dot"));
        if (allDots.length > 0) {
            allDots[0].classList.add("active-dot");
        }
    });

}



fetchProjects().then(projects => {
    const grid = document.querySelector("#projects-grid");
    if (grid) {
        projects.slice(0, 3).forEach(project => {
            const card = getProjects(project);
            grid.appendChild(card);
        });
    }
});