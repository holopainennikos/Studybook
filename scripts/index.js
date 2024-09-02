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

  let homeworkHTML = '';

  homework.homeworks.forEach((hw) => {
    homeworkHTML += `
      <div class="homework-subject">
        <img class="homework-image" src="${hw.logo}">
        <div class="homework-subject-name">${hw.subject}</div>
        <div class="homework-content">${hw.contents}</div>
        <button class="remove-button js-homework-remove-button" data-homework-id="${hw.id}">&times;</button>
      </div>
    `;

  });

  homeworkHTML += `
    <!-- Button to open the menu -->
<<<<<<< HEAD
    <button id="add-homework-btn" class="add-homework-button">Add Homework</button>

    <!-- The Modal for adding new homework -->
    <div id="homework-modal" class="modal">
=======
    <button id="add-homework-btn" class="add-homework-button js-add-homework-button">Add Homework</button>

    <!-- The Modal for adding new homework -->
    <div id="homework-modal " class="modal homework-modal js-homework-modal">
>>>>>>> lassi
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Add New Homework</h2>
        <form id="add-homework-form">
          <label for="subject">Subject:</label>
          <select id="subject" name="subject">
            <option value="Math">Math</option>
            <option value="Finnish">Finnish</option>
            <option value="English">English</option>
          </select><br><br>

          <label for="contents">Contents:</label><br>
          <textarea id="contents" name="contents" rows="4" cols="50"></textarea><br><br>

          <button type="submit">Add Homework</button>
        </form>
      </div>
    </div>
  `

  document.querySelector('.js-homework-container').innerHTML = homeworkHTML;

  addRemoveHomeworkButtonListeners();
<<<<<<< HEAD
=======
  addAddHomeworkButtonListeners();
>>>>>>> lassi
}

function addRemoveHomeworkButtonListeners() {
  
  document.querySelectorAll('.js-remove-homework-button').forEach((button) => {
    button.addEventListener('click', () => {
      const { homeworkId } = button.dataset;
      console.log(homework);
      console.log(homeworkId);
      homework.removeHomework(homeworkId);
      renderHomeworkGrid();
    })
  })
  
}

function renderTestsGrid() {

  let testsHTML = '';

  tests.tests.forEach((t) => {
    testsHTML += `
      <div class="test-subject">
        <img class="test-image" src="${t.logo}">
        <div class="test-subject-name">${t.subject}</div>
        <div class="test-content">${t.contents}</div>
<<<<<<< HEAD
        <button class="remove-button js-remove-button">&times;</button>
=======
        <button class="remove-button js-test-remove-button" data-test-id="${t.id}">&times;</button>
>>>>>>> lassi
      </div>
    `;

  });

  testsHTML += `
    <!-- Button to open the menu -->
    <button id="add-test-btn" class="add-test-button js-add-test-button">Add Test</button>

    <!-- The Modal for adding new test -->
    <div id="test-modal" class="modal test-modal js-test-modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Add New Test</h2>
        <form id="add-test-form">
          <label for="subject">Subject:</label>
          <select id="subject" name="subject">
            <option value="Math">Math</option>
            <option value="Finnish">Finnish</option>
            <option value="English">English</option>
          </select><br><br>

          <label for="contents">Contents:</label><br>
          <textarea id="contents" name="contents" rows="4" cols="50"></textarea><br><br>

          <button type="submit">Add test</button>
        </form>
      </div>
    </div>
  `


  document.querySelector('.js-test-container').innerHTML = testsHTML;

  addAddTestButtonListeners();
  addRemoveTestButtonListeners();
}

<<<<<<< HEAD


//print(homework);


=======
function addRemoveTestButtonListeners() {
  
  document.querySelectorAll('.js-remove-test-button').forEach((button) => {
    button.addEventListener('click', () => {
      const { testId } = button.dataset;
      
      tests.removeTest(testId);
      renderTestsGrid();
    })
  })

}


function addAddHomeworkButtonListeners() {
  document.querySelector('.js-add-homework-button').onclick = function() {
    const modal = document.querySelector('.js-homework-modal');
    if (modal.style.display === "none" || modal.style.display === "") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  }
}

function addAddTestButtonListeners() {
  document.querySelector('.js-add-test-button').onclick = function() {
    const modal = document.querySelector('.js-test-modal');
    if (modal.style.display === "none" || modal.style.display === "") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  }
}

>>>>>>> lassi
renderHomeworkGrid();
renderTestsGrid();



