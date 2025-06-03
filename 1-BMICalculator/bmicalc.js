const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    let bmi;
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if(height < 0 || isNaN(height)){
        result.innerHTML = 'Please enter a valid height';
    }
    else if(weight < 0 || isNaN(weight)){
        result.innerHTML = 'Please enter a valid weight';
    }else{
        bmi = (weight / ((height * height )/10000)).toFixed(1);

        if(bmi < 18.6 ){
            result.innerHTML = `Under Weight (${bmi})`;
        }else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `Normal Range (${bmi})`;
        }else if (bmi > 24.9) {
            result.innerHTML = `Over Weight (${bmi})`;
        }
    }   
})
