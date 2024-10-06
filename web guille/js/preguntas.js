const questions = [
  {
    question: "¿Quiénes desarrollaron el primer modelo matemático que simulaba una neurona artificial?",
    options: ["a) Geoffrey Hinton y Frank Rosenblatt.",
              "b) Warren McCulloch y Walter Pitts.",
              "c) Ian Goodfellow y Geoffrey Hinton.",
              "d) Frank Rosenblatt y Ian Goodfellow."],
    answer: "b"
  }
];

const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("options");

function displayQuestion(index) {
  questionContainer.textContent = questions[index].question;
  optionsContainer.innerHTML = "";
  
  questions[index].options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => checkAnswer(option.charAt(0), index));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption, index) {
  const correctOption = questions[index].answer;
  const selectedButton = event.target;

  if (selectedOption === correctOption) {
    selectedButton.classList.add("correcto");
  } else {
    selectedButton.classList.add("incorrecto");
    // Find and highlight the correct option
    const options = optionsContainer.querySelectorAll(".option-btn");
    options.forEach(option => {
      if (option.textContent.charAt(0) === correctOption) {
        option.classList.add("correcto");
      }
    });
  }
}

displayQuestion(0);
