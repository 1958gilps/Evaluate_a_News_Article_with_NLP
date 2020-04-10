
const Endpoint = 'https://api.aylien.com/api/v1/absa/hotels'

const API_KEY = '88a6158c6db9e538eaa4e322e01f0777'

const API_ID = 'd99e0e5b';


function checkForQuestion(value, length) {
  if (length > 0 && length < 51) {
    postData(`${Endpoint}/${value}/${API_ID}/${API_KEY}`)
    .then(() => {
      getData('/add', { aspect: value})
        .then(() => {
           `${data.aspect}${data.text}`;
          });
});
      } else {
      alert('Please enter between 1 and 50 characters!');
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

export { checkForQuestion }