function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let enterText = document.getElementById('question').value
    console.log(enterText);

    let enterLength = enterText.length;
    console.log(enterLength);

    
    Client.checkForQuestion(enterText, enterLength);
}

export { handleSubmit };    
