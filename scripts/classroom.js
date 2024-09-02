// Select all elements with the class 'draggable'
const draggables = document.querySelectorAll('.draggable');

// Select all elements with the class 'classroom'
const classrooms = document.querySelectorAll('.classroom');

// Iterate over each draggable element to add event listeners
draggables.forEach(draggable => {
  // When dragging starts, add the 'dragging' class to the element
  draggable.addEventListener('dragstart', (e) => {
    draggable.classList.add('dragging');
    draggable.startX = e.clientX - draggable.offsetLeft; // Store initial mouse offset
    draggable.startY = e.clientY - draggable.offsetTop;
  });

  // When dragging ends, remove the 'dragging' class from the element
  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

// Iterate over each classroom to handle drag over events
classrooms.forEach(classroom => {
  // Listen for the 'dragover' event on each classroom
  classroom.addEventListener('dragover', e => {
    // Prevent the default behavior to allow dropping
    e.preventDefault();

    // Select the currently dragged element
    const draggable = document.querySelector('.dragging');
    if (!draggable) return;

    // Calculate the new position of the dragged element
    const x = e.clientX - draggable.startX;
    const y = e.clientY - draggable.startY;

    // Set the position of the dragged element
    draggable.style.left = `${x}px`;
    draggable.style.top = `${y}px`;
  });
});
