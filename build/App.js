"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// DEBUGGING
const log = console.log;
class App {
    ///////////////////////////
    // READ PROJECT FORM INPUT
    ///////////////////////////
    static readProjectFormInput() {
        // GET VALUES FROM INPUT FIELDS
        const projectName = document.getElementById('project-name').value;
        const assignedTo = document.getElementById('user-name').value;
        const category = document.getElementById('category').value;
        const level = document.getElementById('levels').options.selectedIndex;
        // RETURN FORM INPUT VALUES
        return {
            projectName,
            assignedTo,
            category,
            level
        };
    }
    //////////////////////////////
    // METHOD FOR ADDING PROJECTS
    //////////////////////////////
    static addProject() {
        return __awaiter(this, void 0, void 0, function* () {
            // event.preventDefault();
            // CREATE NEW PROJECT
            const newProject = App.readProjectFormInput();
            // CREATE POST REQUEST
            yield fetch(`http://localhost:3000/projects`, {
                method: 'POST',
                body: JSON.stringify(newProject),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            log('project added...');
        });
    }
    ///////////////////////////////////////
    // METHOD TO DISPLAY ALL ADDED PROJECTS
    ///////////////////////////////////////
    static displayAllProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            // FETCH ALL PROJECTS
            let response = yield fetch(`http://localhost:3000/projects`);
            // CONVERT RESPONSE TO JSON
            let projects = yield response.json();
            //////////////////////////////
            // SETTING PROJECT START TIME 
            // INITIALIZE DATE OBJECT
            //////////////////////////////
            const date = new Date();
            const dd = date.getDay();
            const MM = date.getMonth();
            const yyyy = date.getFullYear();
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
            function getMonth() {
                for (let index = 0; index < months.length; index++) {
                    if (index == MM) {
                        let month = months[index];
                        return month;
                    }
                }
            }
            for (let project of projects) {
                // SELECTOR FOR PROJECT CONTAINER | WRAPPER
                const projectWrapper = document.querySelector('.project-wrapper');
                let categoryLevel;
                // SELECTOR FOR PROJECT CATEGORY
                const projectCategoryIndicators = document.querySelectorAll('.project-category');
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

                <a href="#" class="delete" title="Delete">
                    <ion-icon name="trash-outline" class="delete-icon"></ion-icon>
                </a>
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
        });
    }
    // METHOD TO GET ALL PROJECTS
    static getAllProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            // FETCH ALL PROJETS
            let response = yield fetch(`http://localhost:3000/projects`);
            // CONVERT RESPONSE TO JSON
            let projects = yield response.json();
            for (let project of projects) {
                log(project);
            }
        });
    }
}
// 
App.displayAllProjects();
//# sourceMappingURL=App.js.map