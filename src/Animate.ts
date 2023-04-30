/////////////////////////////////
// PROJECT FORM POP UP ANIMATION
////////////////////////////////
// ADD PROJECT BUTTON
const addProjectBtn = document.getElementById('add-projects') as HTMLElement;
// ADD PROJECT FORM
const addProjectForm = document.querySelector('.add-project-form') as HTMLFormElement;
// EVENT LISTENER
addProjectBtn.addEventListener('click', displayAddProjectForm);
// DISPLAY FORM TO ADD PROJECT
function displayAddProjectForm(event: Event) {
    event.preventDefault();
    addProjectForm.classList.toggle('active');
}
/////////////////////////////////
// PROFILE CARD POP UP ANIMATION
/////////////////////////////////
// PROFILE ICON
const profileIcon = document.querySelector('.profile') as HTMLElement;
// PROFILE CARD
const profileCard = document.querySelector('.profile-card') as HTMLElement;
// EVENT LISTENER
profileIcon.addEventListener('click', displayProfileCard);
// DISPLAY PROFILE CARD
function displayProfileCard(event:Event) {
    event.preventDefault();
    profileCard.classList.toggle('active');
}
