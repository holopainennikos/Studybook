class classPersonnel {
  students;
  #localStorageKey;

  constructor(localStorageKey) {
    
    this.#localStorageKey = localStorageKey;

    this.#loadFromStorage();
    this.calculateClassroom();
  }

  #loadFromStorage() {
    this.students = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [{
      id: "19",
      image: "images/student-M.png",
      name: "Daniel",
      surname: "Hill",
      gender: "m",
      year: 1,
      class: "D",
      group: "B"
    },
    {
      id: "20",
      image: "images/student-F.png",
      name: "Abigail",
      surname: "Scott",
      gender: "f",
      year: 5,
      class: "A",
      group: "A"
    },
    {
      id: "21",
      image: "images/student-M.png",
      name: "Matthew",
      surname: "Torres",
      gender: "m",
      year: 6,
      class: "B",
      group: "B"
    }];
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.students));
  }

  addToClass(studentId) {
    let matchingStudent;
  
    this.students.forEach((student) => {
      if(studentId === student.studentId) {
        matchingStudent = student;
      }
    });
  
    const quantity = Number(document.querySelector(`.js-quantity-selector-${studentId}`).value);
    if (!quantity) {
      quantity = 1;
    }
  
    if(matchingStudent) {
      console.log('this student is already in the class!!')
    } else {
      this.students.push( { studentId } );
    }
  
    this.calculateClassroom();
  
    this.saveToStorage();
  }


  removeFromClassroom(studentId) {
    const newClassroom = [];
    
    this.students.forEach((student) => {
      if (student.studentId !== studentId) {
        newClassroom.push(student);
      }
    });
  
    this.students = newClassroom;
    this.saveToStorage();
  }
}