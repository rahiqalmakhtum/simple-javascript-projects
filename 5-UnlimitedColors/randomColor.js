const randomColor = () => {
    const hex = '0123456789ABCDEF'; // Added missing '9'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let interVal;

const startChangingColor = () => {
    function changeBG(){
        document.body.style.backgroundColor = randomColor();
    }
    interVal = setInterval(changeBG, 1000)
};
const stopChangingColor = () => {
    clearInterval(interVal)
    interVal = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click',  stopChangingColor)  ;
