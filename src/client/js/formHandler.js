function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let enterText = document.getElementById('question').value
    console.log(enterText);

    let enterLength = enterText.length;
    console.log(enterLength);
    
    Client.checkForName(enterText, enterLength);
}
    //console.log("::: Form Submitted :::")
/*
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(data) {  // changed res to data
        document.getElementById('results').innerHTML = data.message // changed res to data
    })
}
*/
export { handleSubmit };    
