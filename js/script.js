// Sample questions. DONT touch this data
const questions = [
  {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2,
  },
  {
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0,
  },
  {
    text: "What does HTML stand for?",
    options: [
      "Hyperlink and Text Markup Language",
      "High Technology Modern Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 2,
  },
  {
    text: "What does CSS stand for?",
    options: [
      "Cascading Stylesheets",
      "Cascading Styling Styles",
      "Cascading Sheets for Stylings",
      "Cascaded Stylesheets",
    ],
    correct: 0,
  },
  {
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3,
  },
  {
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0,
  },
  {
    text: "What is the primary use of the Git command 'clone'?",
    options: [
      "To stage changes",
      "To copy a repository",
      "To switch to a different branch",
      "To list all the files in a repository",
    ],
    correct: 1,
  },
  {
    text: "What does API stand for in the context of programming?",
    options: [
      "Apple Pie Interface",
      "Application Programming Interface",
      "Advanced Peripheral Integration",
      "Application Process Integration",
    ],
    correct: 1,
  },
  {
    text: "Javascript is a single threaded programming language",
    options: ["True", "False"],
    correct: 0,
  },
  {
    text: "API calls in Javascript can be done using the following method",
    options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
    correct: 2,
  },
];

// Global variables
let currentQuestionIndex = 0;
let score = 0;

const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");
const questionElement = document.getElementById("question");
const answerList = document.getElementById("answer-list");

function loadQuestion() {
  // Load the first question and load subsequent question from this function
  const questionElement = document.getElementById("question");
  const answerList = document.getElementById("answer-list");
  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.text;
  answerList.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="radio" name="answer" value="${index}" id="option${index}"><label for="option${index}">${option}</label>`;
    answerList.appendChild(li);
  });
}

submitButton.addEventListener("click", () => {
  // Implement the logic when the user clicks on submit button. The answer selected by the user should be validated here with the correct option
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    const selectedAnswer = parseInt(selectedOption.value);
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
      score++;
    }
    document
      .querySelector(
        `input[name="answer"][value="${questions[currentQuestionIndex].correct}"]`
      )
      .parentElement.classList.add("correct");

    nextButton.classList.remove("hide");
    submitButton.classList.add("hide");
  } else {
    alert("Please select an answer!");
  }
});

nextButton.addEventListener("click", () => {
  // Implement the logic for showing the next question in the questions array. Basic DOM manipulation methods are required here.
  // Also check for quiz completion here as well
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    alert(`Quiz finished! Your score is: ${score}/10`);
    // Reset for new attempt
    currentQuestionIndex = 0;
    loadQuestion();
    score = 0;
  }
  document
    .querySelector(
      `input[name="answer"][value="${questions[currentQuestionIndex].correct}"]`
    )
    .parentElement.classList.remove("correct");
  nextButton.classList.add("hide");
  submitButton.classList.remove("hide");
});

// Load the first question on startup
loadQuestion();
