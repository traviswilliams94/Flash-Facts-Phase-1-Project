// code for the post request, getting the form to add data

//event listener for the submit button
document.querySelector('form').addEventListener('submit', handleSubmit);

//function to handle the submit
function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    let questionObj = {
        category:form.category.value,
        question:form.question.value,
        correct_answer:form.CorrectResponse.value,
        incorrect_answers:[form.WrongOption1.value, form.WrongOption2.value, form.WrongOption3.value],
    }

    createNewQuestion(questionObj);
    form.reset();
}

//fucntion to POST
function createNewQuestion(questionObj) {
    fetch('db.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
            body:JSON.stringify(questionObj)
    })

    .then(res => res.json())
    .then(console.log(questionObj))
};

//event listener for correct and incorrect responses

document.querySelectorAll(responsebutton).addEventListener('click', () => {
    console.log('i clicked an answer')
});

// function answerAlerts(){  
// console.log('i clicked an answer')
// };

