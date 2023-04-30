// ADD PROJECT BUTTON
const addProjectBtn = document.getElementById('add-projects') as HTMLElement;

// ADD PROJECT FORM
const addProjectForm = document.querySelector('.add-project-form') as HTMLFormElement;

// DISPLAY FORM TO ADD PROJECT
function displayAddProjectForm(event: Event) {
    event.preventDefault();
    addProjectForm.classList.toggle('active');
}

addProjectBtn.addEventListener('click', displayAddProjectForm);