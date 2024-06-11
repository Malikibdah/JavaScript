document.getElementById('userform').addEventListener('submit', function(event) {
    event.preventDefault();

   
    let form = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        birthDate: document.getElementById('birthDate').value,
        image: document.getElementById('image').value,
        description: document.getElementById('description').value,
        major: document.getElementById('major').value,
        programmingLanguages: [
            document.getElementById('html').checked ? 'HTML' : '',
            document.getElementById('css').checked ? 'CSS' : '',
            document.getElementById('js').checked ? 'JS' : ''
        ].filter(Boolean),
        siblingsNumber: document.getElementById('siblingsNumber').value,
        siblingsDescription: document.getElementById('siblingsDescription').value
    };

    
    localStorage.setItem('form', JSON.stringify(form));

    
    console.log(form);
});