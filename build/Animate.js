"use strict";
// ADD PROJECT BUTTON
const addProjectBtn = document.getElementById('add-projects');
// ADD PROJECT FORM
const addProjectForm = document.querySelector('.add-project-form');
// DISPLAY FORM TO ADD PROJECT
function displayAddProjectForm(event) {
    event.preventDefault();
    addProjectForm.classList.toggle('active');
}
addProjectBtn.addEventListener('click', displayAddProjectForm);
//# sourceMappingURL=Animate.js.map