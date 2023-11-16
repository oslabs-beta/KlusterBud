// const queryHandler = function (string) {
//     const address = 'localhost:9090/api/v1/query?query=' + string;
//     console.log(address);
// }
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit')
    submitButton.addEventListener('click', () => {
        const address = 'localhost:9090/api/v1/query?query=' + document.getElementById('queryString').value;
        console.log(address);
    })
})