const form = document.querySelector('form')
const randNumber = Math.round( Math.random() * 100 );

let guess = [];
    let i = 0;
    let count = 10;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let number = parseInt(document.querySelector('#guessField').value);

    if(isNaN(number) || number < 0){
        alert('Please enter a valid non-negative number.')
        return;
    }
        
    if( randNumber != number && i < 10 ){
        guess[i] = number;
        i++; 
        count--;

        document.querySelector('.guesses').innerHTML = guess;
        document.querySelector('.lastResult').innerHTML = count;
        if( Math.abs( randNumber - number ) <= 10 ){
            document.querySelector('.lowOrHi').innerHTML = '🔥 Close!'
        } 
        else if( Math.abs(randNumber - number ) > 20 ){
            document.querySelector('.lowOrHi').innerHTML = '❌ Too Far!'
        }
        else{
            document.querySelector('.lowOrHi').innerHTML = '❌ Far!'
        }
            
    }else if( count === 0){
        document.querySelector('.lowOrHi').innerHTML = '🥲 Game Over! No guesses left.'
    }
    else{
        document.querySelector('.result').innerHTML = '🤩 Correct!'
    }

    document.querySelector('#guessField').value = '';
})