const buttons= document.querySelectorAll(".btn");
console.log(buttons);
const body = document.querySelector("body");

buttons.forEach((button)=>{
    button.addEventListener('click', function(e){
        console.log(e.target.id);
        switch (e.target.id) {
            case "white":
                body.style.backgroundColor = e.target.id
                break;
        
            case "grey":
                body.style.backgroundColor = e.target.id
                break;
        
            case "green":
                body.style.backgroundColor = e.target.id
                break;
        
            case "yellow":
                body.style.backgroundColor = e.target.id
                break;
        
            default:
                body.style.backgroundColor("white")
                break;
        }
    })
})