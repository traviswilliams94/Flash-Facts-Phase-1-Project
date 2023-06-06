// code here

// Fetching the JSON data 

fetch('http://localhost:3000/questions')
    .then(res => res.json())
    .then(questions => generateQuestion(questions)
    );

function generateQuestion(questions) {
    
    // Randomly selecting a question
    const randomQuestionIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomQuestionIndex];

    // Display the question
    document.querySelector('.displayquestion').textContent = currentQuestion.question;

    // Shuffle the answers
    const answers = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers];
    shuffleArray(answers);

    // Display the shuffled answers
    for (let i = 0; i < 4; i++) {
        let button = document.getElementById('option' + (i+1));
        button.textContent = answers[i];
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
document.getElementById('nextquestion').addEventListener('click', generateQuestion);

// Check answer function
function checkAnswer(event) {
  if (event.target.textContent === currentQuestion.correct_answer) {
      alert("Correct!");
  } else {
      alert("Incorrect. Try again!");
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

