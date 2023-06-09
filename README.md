<!-- WP Notes and Issues 6/6/23: To get around CORS protocol issues that prevented access to the db.json data, I was able to get this to "work" by installing the Live Server extension in VS code and opening the index.html file using that extenstion. That way, it selects and displays a random question from the data without any security issues. 

Next, in order to display the answer choices in a random order, I did some research and learned of an algorithm to handle that (Fisher-Yates Shuffle algorithm).  

Also added an event listener for the "Next Question" button which seems to work just right.

Need to figure out a solution for questions and answers with certain puctuation in the text, eg. quotation marks displaying as "&quot", ampersands as "&amp" and apostrophes as "&#039"...

Lastly, the page seems to refresh at irregular intervals when it's not the actively selected windo. I was trying to add some "preventDefault" functionality to make that stop but was unable and reached my wit's end. -->

Fact Flash is your go-to trivia app for quick and exciting knowledge snippets. Click a button to generate a question (or set of questions) from a range of topics you can select, and submit your answer(s) to see if you are right. Create and submit your own trivia questions to add to the collection.


User Story, requirements, and expected challenges
As a user, I want a random trivia question to display upon page load. I want to click on 1 of 4 options and receive an alert of “correct” or “incorrect” based on my selection. When I am ready for another question, I want to click a “Next Question” button that will populate a new random question.

I want to be able to filter my questions by category with a multi select menu, allowing me to select a single category, multiple categories, or all categories and use that selection to filter which random questions I will be served. These filters should stay in place until I reload the page. Page reload should only happen manually and not when I take any action within the application.

Lastly, I want the ability to submit a form to add a new question to the database. Clicking a specific button  will display or hide the submit form. The form will take a category, a question, 4 answer options and a way to designate the correct answer.  In the form, there will be a submit button that will POST the new question object to the database. 

(Update: Want to see a streak counter which will update per each consecutive correct answer and drop to 0 when an incorrec reponse is registered)

We will be using API data from this open trivia database: https://opentdb.com/api_config.php

How we will satisfy the requirements:

We will be fetching the API data above to allow for display of questions, and  posting new objects to the DB with a submit form
No reloads or redirects
Event listeners for clicking buttons, submitting a form, and change event to track filters
We will use an Array Map and Include to create the functionality of filtering the questions by category


Expected Challenges:

We expect to have some challenges with the filtering functionality and are wondering if this might be too advanced for us at this time. [Update: it was not ;)]
