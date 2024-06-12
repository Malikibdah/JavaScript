document.getElementById('userform').addEventListener('submit', function(event) {
    event.preventDefault();

   
    let form1 = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        birthDate: document.getElementById('birthDate').value,
        image: document.getElementById('image').value,
        
    };

    let form2={
        description: document.getElementById('description').value,
        major: document.getElementById('major').value,
        programmingLanguages: [
            document.getElementById('html').checked ? 'HTML' : '',
            document.getElementById('css').checked ? 'CSS' : '',
            document.getElementById('js').checked ? 'JS' : ''
        ].filter(Boolean),
    }
    let form3={
        
        siblingsNumber: document.getElementById('siblingsNumber').value,
        siblingsDescription: document.getElementById('siblingsDescription').value
    }

    
    localStorage.setItem('form1', JSON.stringify(form1));
    localStorage.setItem('form2', JSON.stringify(form2));
    localStorage.setItem('form3', JSON.stringify(form3));

    
    console.log(form1);
    console.log(form2);
    console.log(form3);
});