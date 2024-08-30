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
}
