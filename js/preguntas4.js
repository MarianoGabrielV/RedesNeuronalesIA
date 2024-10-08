const questions4 = [
  {
    question: "¿Qué red neuronal es ideal para el procesamiento de secuencias de datos?",
    options: ["a) Redes neuronales multicapa (MLP).",
              "b) Redes neuronales convolucionales (CNN).",
              "c) Procesamiento del lenguaje naturak (PLN).",
              "d) Redes neuronales recurrentes (RNN)."],
    answer: "d"
  }
];

const questionContainer4 = document.getElementById("question4");
const optionsContainer4 = document.getElementById("options4");

function displayQuestion4(index) {
  questionContainer4.textContent = questions4[index].question;
  optionsContainer4.innerHTML = "";
  
  questions4[index].options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => checkAnswer4(option.charAt(0), index));
    optionsContainer4.appendChild(button);
  });
}

function checkAnswer4(selectedOption, index) {
  const correctOption = questions4[index].answer;
  const selectedButton = event.target;

  if (selectedOption === correctOption) {
    selectedButton.classList.add("correcto");
  } else {
    selectedButton.classList.add("incorrecto");
    // Find and highlight the correct option
    const options = optionsContainer4.querySelectorAll(".option-btn");
    options.forEach(option => {
      if (option.textContent.charAt(0) === correctOption) {
        option.classList.add("correcto");
      }
    });
  }
}

displayQuestion4(0);
