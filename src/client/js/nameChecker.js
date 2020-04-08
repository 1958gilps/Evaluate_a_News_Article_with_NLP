function checkForName(value, length) {
    if (length > 0 && length < 25) {
        postData('http://localhost:8080/add', { question: value })
        .then(() => {
        getData ('http://localhost:8080/answer')
        .then ((data) => {
            document.getElementById('answer').innerHTML = `
        ${data.answer}
      `;
  });
});
        } else {
        alert('Please enter between 1 and 25 characters!');
    }
}
    //console.log("::: Running checkForName :::", inputText);
    const postData = async (url = '', data = {}) => {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      
        try {
          const newData = await response.json();
        } catch (error) {
          console.log('Error: ', error);
        }
      };
      
      const getData = async (url) => {
        const response = await fetch(url);
      
        try {
          const data = await response.json();
          return data;
        } catch (error) {
          console.log('Error: ', error);
        }
      };

export { checkForName }
