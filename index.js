// code here

let allQuestions;
let filteredQuestions;
let currentQuestion;

// Fetching the JSON data 

fetch('http://localhost:3000/questions')
  .then(res => res.json())
  .then(data => {
    allQuestions = data;
    filteredQuestions = [...allQuestions];
    generateQuestion();
  })

  document.getElementById('categoryfilter').addEventListener('change', function() {
    const selectedCategories = Array.from(this.selectedOptions).map(option => option.value);
    filterQuestions(selectedCategories);
    generateQuestion();
});

function filterQuestions(categories) {
    if (categories.length === 0) {
        filteredQuestions = [...allQuestions];
    } else {
        filteredQuestions = allQuestions.filter(question => categories.includes(question.category));
    }
}

function generateQuestion(questions) {
    
    // Randomly selecting a question
    const randomQuestionIndex = Math.floor(Math.random() * filteredQuestions.length);
    currentQuestion = filteredQuestions[randomQuestionIndex];

    // Display the question
    document.querySelector('.displayquestion').textContent = currentQuestion.question;

    // Shuffle the answers
    const answers = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers];
    shuffleArray(answers);

    // Display the shuffled answers
    for (let i = 0; i < 4; i++) {
        let button = document.getElementById('option' + (i+1));
        button.textContent = answers[i];
        button.style.backgroundColor = '#ffff00';
        button.style.borderColor = '#ffff00';
        button.style.opacity = '0.9';
        button.onclick = checkAnswer;
    };
}

// Fisher-Yates Shuffle algorithm to shuffle the answers
function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Event listener for the "Next Question" button
document.getElementById('nextquestion').addEventListener('click', ()  => {
  fetch('http://localhost:3000/questions')
  .then(res => res.json())
  .then(() => generateQuestion())});

// Check answer function
function checkAnswer(event) {
  if (event.target.textContent === currentQuestion.correct_answer) {
      alert("Correct!");
      event.target.style.background = 'green';
      event.target.style.borderColor = 'green';
  } else {
      alert("Incorrect. Try again!");
      event.target.style.background = 'red';
      event.target.style.borderColor = 'red';
      // fetchMe(); an option if we want an incorrect response to auto load another question
  }
}

let addQuestion = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#addquestion");
  const formContainer = document.querySelector("#formcontainer");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addQuestion = !addQuestion;
    if (addQuestion) {
      formContainer.style.display = "block";
    } else {
      formContainer.style.display = "none";
    }
  });
});

// fetchMe();
