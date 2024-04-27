function checkForEnter(event) {
    if (event.key === 'Enter') {
        AIResponse();
        runChat();
    }
}


function AIResponse() {
    var inputElement = document.getElementById('QuestionInput');
    var displayArea = document.getElementById('displayArea');
    displayArea.innerHTML += inputElement.value + '<br>';
}



  
  const MODEL_NAME = "gemini-1.0-pro";
  const API_KEY = "AIzaSyCJ26X7BEoWyiWpq0yvca58mylKZxPqbRI";
  
  async function runChat() {
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
        /*
        {
          role: "user",
          parts: [{ text: "Howdy"}],
        },
        {
          role: "model",
          parts: [{ text: "Howdy! How can I help you today?"}],
        },
        */
      ],
      
    });
  
    const result = document.getElementById('QuestionInput');
    const response = result.response;
    displayArea.innerHTML += response.text() + '<br>';
    inputElement.value = ''; // Clear the input box after adding text
  }
  
  





  