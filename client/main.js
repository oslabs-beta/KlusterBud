// const queryHandler = function (string) {
//     const address = 'localhost:9090/api/v1/query?query=' + string;
//     console.log(address);
// }
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', () => {
        const url = '/query/' + document.getElementById('queryString').value;
        console.log(url)
        //http://localhost:3000/query/up
        fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('info').innerText = JSON.stringify(data, null, 2);
        })
        .catch(err => console.log('ERROR:', err))
    })
})








