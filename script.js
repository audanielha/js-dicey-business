
let newDie = document.querySelector("#newDie");
let dieContainer = document.querySelector("#dieContainer .container .row");
let rerollDie = document.querySelector("#rerollDie");
let sumDie = document.querySelector("#sumDie");

let counter = 0;

class Die{
    constructor(){
        this.div = document.createElement("div");
        this.div.classList =  "die col-sm-3";
        this.span = document.createElement("span");
        this.span.classList = "dieText";
        this.span.id = counter;
        this.span.innerHTML = this.roll();
        this.div.appendChild(this.span);
        dieContainer.appendChild(this.div);
        // total.push(Number(this.span.innerHTML));
        this.span.addEventListener("click",()=>{
            this.span.innerHTML = this.roll();
            // let index = total.indexOf(this.span.id)
            let x = this.span.id;
            total.splice(x,1, Number(this.span.innerHTML));
        })
        this.span.addEventListener("dblclick", ()=>{
            this.span.remove()
            this.div.remove()
        });
    }

    roll(){
        return `${ Math.floor(Math.random() * 6 + 1)}`;
    }

}

newDie.addEventListener("click", ()=>{
    new Die()
    counter ++
});
sumDie.addEventListener("click",()=>{
    let allNumbers = document.querySelectorAll(".dieText");
    let x = 0;
    allNumbers.forEach((num)=>{
        x += Number(num.textContent);
    });
    alert(x)
});

rerollDie.addEventListener("click",()=>{
    let allNumbers = document.querySelectorAll(".dieText");
    allNumbers.forEach((num)=>{
       console.log((num.textContent = Math.floor(Math.random() * 6 + 1)));
    });
})


// Double clicking removes die removes from screen and memory
// re roll die, rerolls all die on the screen
// sum die, alerts the total of die on the screen