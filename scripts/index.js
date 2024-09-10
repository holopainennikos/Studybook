import { Homework } from '../scripts/homework.js';
import { Tests } from '../scripts/tests.js';


let homework = new Homework('homework1');
let tests = new Tests('tests1');

// currently obsolete
// TODO: Add everything under this and call when opening the site
function renderClassroom() {

  let classroomHTML = '';

  classroom.forEach((student) => {
    classroomHTML += `
       `;

  });


  document.querySelector('.js-class-personnel').innerHTML = classroomHTML;

}

// Renders the homework portion of the page by going through the array of all the different homeworks
// This function is called when you open the page as well as every time you make a change to a homework
function renderHomeworkGrid() {

  let homeworkHTML = '';

  homework.homeworks.forEach((hw) => {
    homeworkHTML += `
      <div class="homework-subject">
        <img class="homework-image" src="${hw.logo}">
        <div class="homework-subject-name">${hw.subject}</div>
        <div class="homework-content">${hw.contents}</div>
        <div class="homework-due-date">${hw.dueDate}</div>
        <button class="remove-button js-remove-homework-button" data-homework-id="${hw.id}">&times;</button>
      </div>
    `;

  });

  homeworkHTML += `
    <!-- The Modal for adding new homework -->
    <div id="homework-modal " class="modal homework-modal js-homework-modal">
      <div class="modal-content">
        <button class="close-button">&times;</button>
        <h2>Add New Homework</h2>
        <form id="add-homework-form" class="js-add-homework-form">
          <label for="subject">Subject:</label>
          <select id="subject" class="js-homework-subject" name="subject">
            <option value="Math">Math</option>
            <option value="Finnish">Finnish</option>
            <option value="English">English</option>
            <option value="Physical Education">Physical Education</option>
            <option value="Music">Music</option>
          </select><br><br>

          <label for="contents">Contents:</label><br>
          <textarea id="contents" class="js-homework-contents" name="contents" rows="4" cols="50"></textarea><br><br>

          <button type="submit">Add Homework</button>
        </form>
      </div>
    </div>
  `

  document.querySelector('.js-homework-container').innerHTML = homeworkHTML;

  addSubmitHomeworkListeners();
  addRemoveHomeworkButtonListeners();
  addAddHomeworkButtonListeners();
}

function addRemoveHomeworkButtonListeners() {
  
  document.querySelectorAll('.js-remove-homework-button').forEach((button) => {
    button.addEventListener('click', () => {
      const { homeworkId } = button.dataset;
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
        <div class="homework-due-date">${t.dueDate}</div>
        <button class="remove-button js-remove-test-button" data-test-id="${t.id}">&times;</button>
      </div>
    `;

  });

  testsHTML += `
    <!-- The Modal for adding new test -->
    <div id="test-modal" class="modal test-modal js-test-modal">
      <div class="modal-content">
        <button class="close-button">&times;</button>
        <h2>Add New Test</h2>
        <form id="add-test-form" class="js-add-test-form">
          <label for="subject">Subject:</label>
          <select id="subject" class="js-test-subject" name="subject">
            <option value="Math">Math</option>
            <option value="Finnish">Finnish</option>
            <option value="English">English</option>
          </select><br><br>

          <label for="contents">Contents:</label><br>
          <textarea id="contents" class="js-test-contents" name="contents" rows="4" cols="50"></textarea><br><br>

          <button type="submit">Add test</button>
        </form>
      </div>
    </div>
  `


  document.querySelector('.js-test-container').innerHTML = testsHTML;

  addSubmitTestListeners();
  addAddTestButtonListeners();
  addRemoveTestButtonListeners();
}

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

function addSubmitHomeworkListeners() {
  let form = document.querySelector('.js-add-homework-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const subject = document.querySelector('.js-homework-subject').value;
    const contents = document.querySelector('.js-homework-contents').value;

    homework.addHomework(subject, contents);

    // Re-render the homework grid
    renderHomeworkGrid();

    // Close the modal
    modal.style.display = "none";

    // Clear the form
    form.reset();
  });
}

function addSubmitTestListeners() {
  let form = document.querySelector('.js-add-test-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const subject = document.querySelector('.js-test-subject').value;
    const contents = document.querySelector('.js-test-contents').value;

    tests.addTest(subject, contents);

    // Re-render the homework grid
    renderTestsGrid();

    // Close the modal
    modal.style.display = "none";

    // Clear the form
    form.reset();
  });
}

renderHomeworkGrid();
renderTestsGrid();
