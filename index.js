// code here

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