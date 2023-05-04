// DEBUGGING
const log = console.log;

// SELECTORS
// DELETE PROJECT ICON | TRASH ICON
const deleteBtn = document.querySelector('.delete') as HTMLElement;


class App {
    ///////////////////////////
    // READ PROJECT FORM INPUT
    ///////////////////////////
    static readProjectFormInput() {
        // GET VALUES FROM INPUT FIELDS
        const projectName = (document.getElementById('project-name')! as HTMLInputElement).value;
        const assignedTo = (document.getElementById('user-name')! as HTMLInputElement).value;
        const category = (document.getElementById('category')! as HTMLInputElement).value;
        const level: number = (document.getElementById('levels') as HTMLSelectElement).options.selectedIndex;
        // RETURN FORM INPUT VALUES
        return {
            projectName,
            assignedTo,
            category,
            level
        }
    }
    //////////////////////////////
    // METHOD FOR ADDING PROJECTS
    //////////////////////////////
    static async addProject() {
        // event.preventDefault();
        // CREATE NEW PROJECT
        const newProject = App.readProjectFormInput();
        // CREATE POST REQUEST
        await fetch(`http://localhost:3000/projects`, {
            method: 'POST',
            body: JSON.stringify(newProject),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        log('project added...');
    }

    ///////////////////////////////////////
    // METHOD TO DISPLAY ALL ADDED PROJECTS
    ///////////////////////////////////////
    static async displayAllProjects() {
        // FETCH ALL PROJECTS
        let response = await fetch(`http://localhost:3000/projects`);
        // CONVERT RESPONSE TO JSON
        let projects = await response.json();
        //////////////////////////////
        // SETTING PROJECT START TIME 
        // INITIALIZE DATE OBJECT
        //////////////////////////////
        const date = new Date();
        const dd: number = date.getDay();
        const MM: number = date.getMonth();
        const yyyy: number = date.getFullYear();
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        // GET CURRENT MONTH
        function getMonth(): any {
            for (let index: number = 0; index < months.length; index++) {
                if (index == MM) {
                    let month = months[index];
                    return month;
                }
            }
        }

        for (let project of projects) {
            // SELECTOR FOR PROJECT CONTAINER | WRAPPER
            const projectWrapper = document.querySelector('.project-wrapper') as HTMLDivElement;

            let categoryLevel:string;

                /////////////////////////////////////////////////////
                // SET PROJECT LEVEL BASED ON VALUE RETURNED FROM DB
                /////////////////////////////////////////////////////
                switch (project.level) {
                    case 1:
                        categoryLevel = 'critical';
                        break;
                    case 2:
                        categoryLevel = 'moderate';
                        break;
                    case 3:
                        categoryLevel = 'normal';
                        break;
                    default:
                        categoryLevel = 'normal';
                        break;
                }

            // PROJECT CARD CONTENT STRUCTURE
            let projectCard = `
        <div class="project-card">
            <div class="action-icons">
                <a href="#" class="update" title="Update">
                    <ion-icon name="refresh-outline" class="update-icon"></ion-icon>
                </a>

                <button class="delete" title="Delete" onclick="App.deleteProject()">
                    <ion-icon name="trash-outline" class="delete-icon"></ion-icon>
                </button>
            </div>

            <div class="project-category ${categoryLevel}">
                <h3>
                    ${project.category}
                </h3>
            </div>

            <div class="project-content">
                <h2 class="project-name">
                    ${project.projectName}
                </h2>

                <ul class="tasks">
                    <li class="task-item">
                        <a href="#" class="task">
                            Software Upgrades
                        </a>
                    </li>
                    <li class="task-item">
                        <a href="#" class="task">
                            Interfaces
                        </a>
                    </li>
                    <li class="task-item">
                        <a href="#" class="task">
                            Antivirus software
                        </a>
                    </li>
                    <li class="task-item">
                        <a href="#" class="task">
                            Upgrades
                        </a>
                    </li>
                </ul>
            </div>

            <div class="timeline">
                <div class="start-date">
                    <ion-icon name="calendar-outline" class="calender-icon"></ion-icon>

                    <h3>
                        Start date:
                    </h3>
                </div>

                <p class="date">
                    ${dd} ${getMonth()}, ${yyyy}
                </p>
            </div>
        </div>
        `;

            projectWrapper.innerHTML += projectCard;
        }
    }

    // METHOD TO GET ALL PROJECTS
    static async getAllProjects() {
        // FETCH ALL PROJETS
        let response = await fetch(`http://localhost:3000/projects`);
        // CONVERT RESPONSE TO JSON
        let projects = await response.json();
        for (let project of projects) {
            log(project);
        }
    }

    ////////////////////////////////
    // METHOD FOR DELETING PROJECTS
    ////////////////////////////////
    static async deleteProject(id: any) {
        await fetch(`http://localhost:3000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        log('Project deleted....');
    }

}

// DISPLAY ALL PRODUCTS
App.displayAllProjects();


