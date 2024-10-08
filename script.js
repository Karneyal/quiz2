// Questions, Options, and Clues
const questions = [
    {
        question: "What was Matthew before he followed Jesus?(యేసును అనుసరించే ముందు మత్తయి ఏ వృత్తిలో ఉన్నాడు?)",
        options: ["A soldier సైనికుడు", "A fisherman  మత్స్యకారుడు", "A tax collector పన్ను వసూలుదారు", "A priest పూజారి"],
        answer: "A tax collector పన్ను వసూలుదారు",
        clue: "Clue: I hold the water, pure and true, Where faith begins, and life’s made new. నేను స్వచ్ఛమైన నీటిని నిలుపుతాను, ఇక్కడే నమ్మకం మొదలై, జీవితం కొత్తగా మారుతుంది."
    },
    
    {
        question: "What problem did Bartimaeus have that Jesus fixed?(బార్తిమయస్‌కు ఉన్న ఏ సమస్యను యేసు పరిష్కరించాడు? )",
        options: ["He was deaf  అతను చెవిటివాడు", "He was mute  అతను మూగవాడు", "He was blind  అతను అంధుడు", "He was paralyzed  అతను కాళ్ళి"],
        answer: "He was blind  అతను అంధుడు",
        clue: "Clue: I hold the water, pure and true, Where faith begins, and life’s made new."
    },
    {
        question: "True or False: While on Earth, Jesus had the power to raise dead people back to life?(నిజమా అబద్ధమా: భూమిపై ఉన్నప్పుడు, చనిపోయిన వారిని తిరిగి బ్రతికించే శక్తి యేసుకు ఉందా?)",
        options: ["True నిజమే", "False అబద్ధం"],
        answer: "True నిజమే",
        clue: "Clue: I hold the water, pure and true, Where faith begins, and life’s made new."
    },
    
    

];

let currentQuestionIndex = 0;
let wrongAttempts = 0;

// Load a question and display options
function loadQuestion() {
    document.getElementById("question").innerText = questions[currentQuestionIndex].question;
    let optionsHtml = "";
    questions[currentQuestionIndex].options.forEach((option, index) => {
        optionsHtml += `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="option" id="option${index}" value="${option}">
                <label class="form-check-label" for="option${index}">
                    ${option}
                </label>
            </div>
        `;
    });
    document.getElementById("options").innerHTML = optionsHtml;
    document.getElementById("clue").innerText = ""; // Clear previous clue
    document.getElementById("submitBtn").classList.remove("d-none"); // Show submit button
}

// Check if the selected answer is correct
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const correctAnswer = questions[currentQuestionIndex].answer;

        if (userAnswer === correctAnswer) {
            // Show the clue and end the quiz
            document.getElementById("clue").innerText = questions[currentQuestionIndex].clue; // Show clue
            document.getElementById("submitBtn").classList.add("d-none"); // Hide submit button after correct answer
        } else {
            // Keep asking until the answer is correct (without clue)
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion(); // Load next question if there are more
            } else {
                disqualifyUser(); // Disqualify after 5 wrong attempts
            }
        }
    } else {
        alert("Please select an answer!");
    }
}

// Show the disqualified message
function disqualifyUser() {
    document.getElementById("quiz-box").classList.add("d-none");
    document.getElementById("disqualified").classList.remove("d-none");
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    wrongAttempts = 0;
    document.getElementById("disqualified").classList.add("d-none");
    document.getElementById("quiz-box").classList.remove("d-none");
    loadQuestion();
}

// Load the first question on page load
window.onload = loadQuestion;
