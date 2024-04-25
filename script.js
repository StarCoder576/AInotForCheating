
function checkForEnter(event) {
    if (event.key === 'Enter') {
        AIResponse();
    }
}

function AIResponse() {
    var inputElement = document.getElementById('QuestionInput');
    var displayArea = document.getElementById('displayArea');
    displayArea.innerHTML += inputElement.value + '<br>';
    inputElement.value = ''; // Clear the input box after adding text
}




const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const MODEL_NAME = "AIzaSyCJ26X7BEoWyiWpq0yvca58mylKZxPqbRI";
  const API_KEY = "YOUR_API_KEY";
  
 
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
 const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
 };
  
const safetySettings = [
    {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
    },
];
  
const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
    {
       role: "user",
       parts: [{ text: "Hello"}],
    },
    {
        role: "model",
        parts: [{ text: "Hello there. How can I help you today?"}],
    },
    ],
});
  
async function runChat() {
    let result = document.getElementById('QuestionInput');
    let response = result.response;
    displayArea.innerHTML += response.text() + '<br>';
  }
  






