export class Tests {
  tests;
  #localStorageKey;

  constructor(localStorageKey) {
    
    this.#localStorageKey = localStorageKey;

    this.#loadFromStorage();
    //this.calculateTests();
  }

  #loadFromStorage() {
    this.tests = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [{
      id: "1",
      subject: "Math",
      logo: "images/studybook logo.jpg",
      contents: `The whole entire book`,
      dueDate: "Friday"
    },
    {
      id: "2",
      subject: "Finnish",
      logo: "images/studybook logo.jpg",
      contents: `Chapters 1 through 5`,
      dueDate: "Wednesday"
    },
    {
      id: "3",
      subject: "English",
      logo: "images/studybook logo.jpg",
      contents: `-`,
      dueDate: "Tuesday"
    }];
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.tests));
  }

  addTest(subject, contents) {
    // Map subject to a logo (this can be expanded)
    const logos = {
      "Math": "images/studybook logo.jpg",
      "Finnish": "images/studybook logo.jpg",
      "English": "images/studybook logo.jpg"
    };
    // Add the new homework to the list
    this.tests.push({
      id: Date.now().toString(), // Unique ID
      subject: subject,
      logo: logos[subject], // Automatically assign the logo based on subject
      contents: contents,
      dueDate: "" // Set this to empty or handle it based on additional input
    });

    // Save to local storage
    this.saveToStorage();
  }

  removeTest(testID) {
    this.tests = this.tests.filter(t => t.id !== testID);
    this.saveToStorage(); // Save the updated list to local storage
  }
}
