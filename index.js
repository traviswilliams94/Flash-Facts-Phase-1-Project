// code here

// Fetching the JSON data
fetch('db.json')
    .then(res => res.json())
    .then(data => {
        questions = data.questions;
        generateQuestion();
    });

function generateQuestion() {
    
    // Randomly selecting a question
    const randomQuestionIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomQuestionIndex];

    // Display the question
    document.querySelector('.displayquestion').textContent = question.question;

    // Shuffle the answers
    const answers = [question.correct_answer, ...question.incorrect_answers];
    shuffleArray(answers);

    // Display the shuffled answers
    for (let i = 0; i < 4; i++) {
        document.getElementById('option' + (i+1)).textContent = answers[i];
    }
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