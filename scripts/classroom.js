// Fetch the JSON file
fetch('backend/students.json')
  .then(response => response.json())
  .then(studentsData => {
    // Call the function to generate students
    generateStudents(studentsData);
  })
  .catch(error => {
    console.error('Error fetching the student data:', error);
  });

// Generating students
function generateStudents(studentsData) {
  const studentContainer = document.querySelector('.students');
  
  // Loop over the students data array
  studentsData.forEach(student => {
    const studentElement = document.createElement('div');
    studentElement.classList.add('student-image', 'draggable');
    studentElement.setAttribute('draggable', 'true');
    studentElement.setAttribute('data-id', student.id); // Store student ID for potential reference
   
    
    // Populate student details
    studentElement.innerHTML = `
      <img src="${student.image}" alt="${student.name} ${student.surname}">
    `;
    //<p>${student.name} ${student.surname}</p>
    studentContainer.appendChild(studentElement);
  });

  // Initialize drag-and-drop
  initializeDragAndDrop();
}


onmouseover = (event) => {}
// Drag-and-drop logic remains the same
function initializeDragAndDrop() {
  const draggables = document.querySelectorAll('.draggable');
  const classrooms = document.querySelectorAll('.classroom');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
      draggable.classList.add('dragging');
      draggable.startX = e.clientX - draggable.offsetLeft;
      draggable.startY = e.clientY - draggable.offsetTop;
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });

  classrooms.forEach(classroom => {
    classroom.addEventListener('dragover', e => {
      e.preventDefault();
      const draggable = document.querySelector('.dragging');
      if (!draggable) return;
      
      let x = e.clientX - draggable.startX;
      let y = e.clientY - draggable.startY;

      const classroomRect = classroom.getBoundingClientRect();
      const draggableRect = draggable.getBoundingClientRect();

      // Ensure the dragged element stays within bounds
      if (x < 0) x = 0;
      if (y < 0) y = 0;
      if (x + draggableRect.width > classroomRect.width) {
        x = classroomRect.width - draggableRect.width;
      }
      if (y + draggableRect.height > classroomRect.height) {
        y = classroomRect.height - draggableRect.height;
      }

      draggable.style.left = `${x}px`;
      draggable.style.top = `${y}px`;
    });
  });
}
