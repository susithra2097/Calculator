let displayxyz = document.getElementById("display")

let buttonxyz = Array.from(document.getElementsByClassName("btn"))

function click(btnxyz){
    btnxyz.addEventListener("click",(xyz)=>{
        console.log(xyz)
        switch(xyz.target.innerText){
            case '=':
                try{
                    displayxyz.innerText = eval(displayxyz.innerText)
                }
                catch{
                              displayxyz.innerText = "Error"
                }
                break
            case 'C':
                displayxyz.innerText = ""
                break
            case "←":
                displayxyz.innerText = displayxyz.innerText.slice(0,-1)
            default:
                displayxyz.innerText = display.innerText + xyz.target.innerText
                break
        }
    })

}

buttonxyz.map(abcdxyz => click(abcdxyz))