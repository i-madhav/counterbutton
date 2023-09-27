let counterText = 0;
const counter = document.querySelector(".counter-value")
const incrementBtn = document.querySelector(".increase");
const decrementBtn = document.querySelector(".decrease");

incrementBtn.addEventListener("click", () => {
        counterText++;
        counter.innerHTML = counterText;
});


decrementBtn.addEventListener("click", () => {
    if(counterText > 0){
        counterText--;
        counter.innerHTML = counterText;
    }  
});

