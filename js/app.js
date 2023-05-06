//progress update functionality

const updateForm = document.getElementById('projectUpdate');

updateForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const updateStatus = document.getElementById('project-status').value;

    if (updateStatus !== 'In progress' && updateStatus !== 'Completed' && updateStatus !== 'pending') {
        alert('Please give a valid project status');
        return;
    }

    const input = { updateStatus };
    fetch('project status', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(input)
    })

    .then(response => response.json())
        .then(input => {
            console.log('project status updated:', input);
        })

    .catch(error => {
        console.error('error updating project status', error)
    });


});



//logout functionality

const logOut = document.getElementById('logout');
logOut.addEventListener('click', (event) => {
    event.preventDefault();

    fetch('/logout', {
        method: 'POST'
    })

    .then(response => {
        console.log('User logged out successfully');
        window.location.href = '/login'
    })

    .catch(error => {
        console.error('logout was unsuccesful', error)
    })


})