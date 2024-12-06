
let newDie = document.querySelector("#newDie");
let dieContainer = document.querySelector("#dieContainer .container .row");

// Double clicking removes die removes from screen and memory
// re roll die, rerolls all die on the screen
// sum die, alerts the total of die on the screen


class Die{
    constructor(){
        this.div = document.createElement("div");
        this.div.classList =  "die col-sm-3";
        this.span = document.createElement("span");
        this.span.classList = "dieText";
        this.span.textContent = this.roll();
        this.div.appendChild(this.span);
        dieContainer.appendChild(this.div);
        this.span.addEventListener("click",()=>{
            this.span.textContent = this.roll();
        })
        this.div.addEventListener("dblclick", ()=>{
            this.div.style.display = "none";
        })
    }
    roll(){
        return `${ Math.floor(Math.random() * 6 + 1)}`;
    }

    removeDie(){

    }

}

newDie.addEventListener("click", ()=>{
    new Die()
})
