class homework {
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
}