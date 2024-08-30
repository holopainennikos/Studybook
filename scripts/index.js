import { Homework } from '../scripts/homework.js';
import { Tests } from '../scripts/tests.js';

let homework = new Homework('homework1');
let tests = new Tests('tests1');

function renderClassroom() {

  let classroomHTML = '';

  classroom.forEach((student) => {
    classroomHTML += `
       `;

  });


  document.querySelector('.js-class-personnel').innerHTML = classroomHTML;

}


function renderHomeworkGrid() {

  let testsHTML = '';

  homework.homeworks.forEach((hw) => {
    testsHTML += `
      <div class="homework-subject">
        <img class="homework-image" src="${hw.logo}">
        <div class="homework-subject-name">${hw.subject}</div>
        <div class="homework-content">${hw.contents}</div>
        <button class="remove-button">x</button>
      </div>
    `;

  });


  document.querySelector('.js-homework-container').innerHTML = testsHTML;
}

function renderTestsGrid() {

  let testsHTML = '';

  tests.tests.forEach((t) => {
    testsHTML += `
      <div class="test-subject">
        <img class="test-image" src="${t.logo}">
        <div class="test-subject-name">${t.subject}</div>
        <div class="test-content">${t.contents}</div>
        <button class="remove-button">x</button>
      </div>
    `;

  });


  document.querySelector('.js-test-container').innerHTML = testsHTML;
}

//print(homework);




renderHomeworkGrid();
renderTestsGrid();
