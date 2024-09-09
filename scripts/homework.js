export class Homework {
  homeworks;
  #localStorageKey;

  constructor(localStorageKey) {
    
    this.#localStorageKey = localStorageKey;

    this.#loadFromStorage();
    //this.calculateHomework();
  }

  #loadFromStorage() {
    this.homeworks = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [{
      id: "1",
      subject: "Math",
      logo: "images/studybook logo.jpg",
      contents: `The "cottage" from chapter 42`,
      dueDate: "Friday"
    },
    {
      id: "2",
      subject: "Finnish",
      logo: "images/studybook logo.jpg",
      contents: `Exercise 2, 3 and 5 from page 92 from the work book \n Read pages 132 and 133 from the other book`,
      dueDate: "Wednesday"
    },
    {
      id: "3",
      subject: "English",
      logo: "images/studybook logo.jpg",
      contents: `Exercise 1 from page 65 of the work book`,
      dueDate: "Tuesday"
    }];
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.homeworks));
  }

  addHomework(subject, contents) {
    // Map subject to a logo (this can be expanded)
    const logos = {
      "Math": "images/studybook logo.jpg",
      "Finnish": "images/studybook logo.jpg",
      "English": "images/studybook logo.jpg"
    };
    // Add the new homework to the list
    this.homeworks.push({
      id: Date.now().toString(), // Unique ID
      subject: subject,
      logo: logos[subject], // Automatically assign the logo based on subject
      contents: contents,
      dueDate: "" // Set this to empty or handle it based on additional input
    });

    // Save to local storage
    this.saveToStorage();
  }

  removeHomework(homeworkID) {
    this.homeworks = this.homeworks.filter(hw => hw.id !== homeworkID);
    this.saveToStorage(); // Save the updated list to local storage
  }
}
