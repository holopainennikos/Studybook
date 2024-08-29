import '../scripts/homework.js';


function renderClassroom() {

  let classroomHTML = '';

  classroom.forEach((student) => {
    classroomHTML += `
       `;

  });


  document.querySelector('.js-class-personnel').innerHTML = classroomHTML;

}

document.querySelector('.js-homework-container').innerHTML = `
  <div class="homework-subject">
    <img class="homework-image" src="images/studybook logo.png">
    <div class="homework-subject-name">Math</div>
    <div class="homework-content">The "cottage" from chapter 42</div>
    <button class="remove-button">x</button>
  </div>
  <div class="homework-subject">
    <img class="homework-image" src="images/studybook logo.png">
    <div class="homework-subject-name">Finnish</div>
    <div class="homework-content">
      <p>
        Exercise 2, 3 and 5 from page 92 from the work book 
      </p>
      <p>
        Read pages 132 and 133 from the other book
      </p>
    </div>
    <button class="remove-button">x</button>
  </div>
  <div class="homework-subject">
    <img class="homework-image" src="images/studybook logo.png">
    <div class="homework-subject-name">English</div>
    <div class="homework-content">-</div>
    <button class="remove-button">x</button>
  </div>
`;

document.querySelector('.js-test-container').innerHTML = `
  <div class="test-subject">
    <img class="test-image" src="images/studybook logo.png">
    <div>Math</div>
    <div class="homework-content">-</div>
    <button class="remove-button">x</button>
  </div>
  <div class="test-subject">
    <img class="test-image" src="images/studybook logo.png">
    <div>Finnish</div>
    <div class="homework-content">-</div>
    <button class="remove-button">x</button>
  </div>
  <div class="test-subject">
    <img class="test-image" src="images/studybook logo.png">
    <div>English</div>
    <div class="homework-content">-</div>
    <button class="remove-button">x</button>
  </div>
`;