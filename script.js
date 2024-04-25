


function AIResponse() {
    var inputElement = document.getElementById('QuestionInput');
    var displayArea = document.getElementById('displayArea');
    displayArea.innerHTML += inputElement.value + '<br>';
    inputElement.value = ''; // Clear the input box after adding text
}




