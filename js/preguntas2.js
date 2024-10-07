const questions2 = [
  {
    question: "¿Qué técnica permitió el entrenamiento de redes neuronales con múltiples capas en los años 1980?",
    options: ["a) Redes neuronales convolucionales.",
              "b) Perceptrón.",
              "c) Retropropagación del error (Backpropagation).",
              "d) Redes neuronales recurrentes."],
    answer: "c"
  }
];

const questionContainer2 = document.getElementById("question2");
const optionsContainer2 = document.getElementById("options2");

function displayQuestion2(index) {
  questionContainer2.textContent = questions2[index].question;
  optionsContainer2.innerHTML = "";
  
  questions2[index].options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => checkAnswer2(option.charAt(0), index));
    optionsContainer2.appendChild(button);
  });
}

function checkAnswer2(selectedOption, index) {
  const correctOption = questions2[index].answer;
  const selectedButton = event.target;

  if (selectedOption === correctOption) {
    selectedButton.classList.add("correcto");
  } else {
    selectedButton.classList.add("incorrecto");
    // Find and highlight the correct option
    const options = optionsContainer2.querySelectorAll(".option-btn");
    options.forEach(option => {
      if (option.textContent.charAt(0) === correctOption) {
        option.classList.add("correcto");
      }
    });
  }
}

displayQuestion2(0);
