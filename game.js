// Global Variables:
let quizData = [];
let score = 0;
let currentQuestionIndex = 0;

let lengthOfQuestion;
let correctAnsweredScore = 0;

// Function to fetch and parse JSON
async function fetchData() {
  try {
    const response = await fetch('game.json');
    quizData = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Read - Get a specific question by index
function getQuestionByIndex(index) {
  return quizData.questions[index];
}

// Function to display the current question
function displayQuestion() {
  const question = getQuestionByIndex(currentQuestionIndex);

  // Update the question text
  const questionTextElement = document.getElementById('questionText');
  questionTextElement.textContent = question.questionText;

  // Clear existing choices
  const choicesContainer = document.getElementById('choicesContainer');
  choicesContainer.innerHTML = '';

  // Loop through choices and create buttons
  question.options.forEach((choice, index) => {
    const choiceButton = document.createElement('button');
    choiceButton.className = 'button is-info is-light is-large is-responsive';
    choiceButton.textContent = choice;

    // Add an event listener to handle choice selection
    choiceButton.addEventListener('click', () => handleChoiceSelection(index));

    // Append the button to the choices container
    const column = document.createElement('div');
    column.className = 'column is-6';
    column.appendChild(choiceButton);
    choicesContainer.appendChild(column);
  });
}

// Function to display final score overlay
function displayFinalScore() {
  const overlay = document.getElementById('overlay');
  const finalScoreElement = document.getElementById('finalScore');
  const playAgainBtn = document.getElementById('playAgainBtn');

  finalScoreElement.textContent = 'Final Score: ' + score + ' >> ' + correctAnsweredScore + '/' + lengthOfQuestion;
  overlay.classList.remove('hidden');

  // Add event listener to play again button
  playAgainBtn.addEventListener('click', () => {
    // Reset variables and hide overlay
    score = 0;
    currentQuestionIndex = 0;
    overlay.classList.add('hidden');

    // Display the first question again
    displayQuestion();
  });
}

// Function to handle choice selection
function handleChoiceSelection(index) {
  const question = getQuestionByIndex(currentQuestionIndex);

  // Check if the selected choice is correct
  if (index === question.correctOption) {
    score = score + 5;
    correctAnsweredScore++;
    // console.log('Correct!');
  } else {
    // console.log('Incorrect!');
  }

  lengthOfQuestion = quizData.questions.length;

  // Move to the next question or display the final score
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.questions.length) {
    // Display the next question
    displayQuestion();
  } else {
    // Display the final score if all questions have been answered
    displayFinalScore();
  }

  // Log the current score
  // console.log('SCORE: ' + score);
}

// Call the function to display the initial question
fetchData().then(() => displayQuestion());
