

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
  </div>
  <div class="homework-subject">
    <img class="homework-image" src="images/studybook logo.png">
    <div class="homework-subject-name">English</div>
  </div>
`;