let buttons = document.querySelectorAll('button')

buttons.forEach(function(button){

    button.addEventListener('click', function(e) {
        const value = e.target.innerText;
        
        if (+value >= 0 || value === ".") {
            console.log(value);
        } else {
            console.log("Op: " + value);
        }
    })
})

document.addEventListener("keypress", function(event) {

    console.log(event.key)
})