"use strict";
/////////////////////////////////
// PROJECT FORM POP UP ANIMATION
////////////////////////////////
// ADD PROJECT BUTTON
const addProjectBtn = document.getElementById('add-projects');
// ADD PROJECT FORM
const addProjectForm = document.querySelector('.add-project-form');
// EVENT LISTENER
addProjectBtn.addEventListener('click', displayAddProjectForm);
// DISPLAY FORM TO ADD PROJECT
function displayAddProjectForm(event) {
    event.preventDefault();
    addProjectForm.classList.toggle('active');
    addProjectBtn.classList.toggle('is-active');
}
/////////////////////////////////
// PROFILE CARD POP UP ANIMATION
/////////////////////////////////
// PROFILE ICON
const profileIcon = document.querySelector('.profile');
// PROFILE CARD
const profileCard = document.querySelector('.profile-card');
// EVENT LISTENER
profileIcon.addEventListener('click', displayProfileCard);
// DISPLAY PROFILE CARD
function displayProfileCard(event) {
    event.preventDefault();
    profileCard.classList.toggle('active');
}
//# sourceMappingURL=Animate.js.map