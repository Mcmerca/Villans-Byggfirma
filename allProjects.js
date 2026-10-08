import {fetchProjects} from './projectService.js';

const template = document.querySelector("#gallery-template");

function getProjects(project){
    const clone = template.content.cloneNode(true);
    const title = clone.querySelector(".gallery-title");
    const desc = clone.querySelector(".gallery-desc");
    const year = clone.querySelector(".gallery-year");
    const img = clone.querySelector("img");

    title.textContent = project.title;
    desc.textContent = project.description;
    year.textContent = project.year;

    img.src = project.images;
    img.alt = project.title;

    if (project.images.length > 0) {
        imageGallery(clone, project.images);
    }


    return clone;
}

function imageGallery(post, images) {
    
}

