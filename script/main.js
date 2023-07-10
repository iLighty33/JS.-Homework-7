var mySwitch = false;

main.addEventListener('click', e => {

    if(e.target.id == 'mySwitcher' && mySwitcher.textContent == 'OFF'){
        mySwitcher.innerText = 'ON';
        Red.style['background-color'] = 'red';
        mySwitch = true;
    }
    else if(e.target.id == 'mySwitcher' && mySwitcher.textContent == 'ON'){
        mySwitcher.innerText = 'OFF';
        Red.style['background-color'] = 'white';
        Yellow.style['background-color'] = 'white';
        Green.style['background-color'] = 'white';
        mySwitch = false;
    }
});

// Red Light
main.addEventListener('click', e => {
    if(e.target.id == 'Red' && mySwitch == true) {
        Red.style['background-color'] = 'red';
        Yellow.style['background-color'] = 'white';
        Green.style['background-color'] = 'white';
    }
});
// Yellow Light
main.addEventListener('click', e => {
    if(e.target.id == 'Yellow' && mySwitch == true) {
        Red.style['background-color'] = 'white';
        Yellow.style['background-color'] = 'yellow';
        Green.style['background-color'] = 'white';
    }
});
// Green Light
main.addEventListener('click', e => {
    if(e.target.id == 'Green' && mySwitch == true) {
        Red.style['background-color'] = 'white';
        Yellow.style['background-color'] = 'white';
        Green.style['background-color'] = 'green';
    }
});