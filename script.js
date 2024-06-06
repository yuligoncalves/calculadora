let buttons = document.querySelectorAll('button')

let button = ["+", "-", ".", "/", "="];
console.log(button.includes("+"));


buttons.forEach(function(button){

    button.addEventListener('click', function(e) {
        const value = e.target.innerText;

        if (value >= 0 || value === "+" || value === "-" || value === "/" || value === "=" || value === "*" || value === ".")  {
            console.log("tecla válida")
        }
        
        // idetificando se foi digitado um número ou um operador
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