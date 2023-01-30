
const links = document.querySelector(".links")
const toggleIcon = document.querySelector("#slide")

toggleIcon.addEventListener('click',function(){
    links.classList.toggle("show")
})

const buyBtn = document.querySelector(".buybtn")
const buyHeader = document.querySelector(".buyHeader")
const buyContainer = document.querySelector(".buy__container")

buyBtn.addEventListener('click',function(){
    buyHeader.classList.add("showBuy");

})

buyHeader.addEventListener('click',function(event){
        if (!buyContainer.contains(event.target)) {
            buyHeader.classList.remove("showBuy");
          }
    
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if(entry.isIntersecting){
            entry.target.classList.add('showHidden')
        } 
    }) 
})

const hiddenClasses = document.querySelectorAll(".hidden")
hiddenClasses.forEach((el) => observer.observe(el));


const cardNumberInput = document.querySelector('.cardNumber')
const cardNumberBox = document.querySelector('.credit_number')

const cvvInput = document.querySelector('.cvv_input')
const cvvBox = document.querySelector('.cvv_number')

const ownerInput = document.querySelector('.owner_input')
const ownerBox = document.querySelector('.owner_text')

ownerInput.oninput = () => {
    ownerBox.innerText = ownerInput.value;
}

cardNumberInput.oninput = () => {
    cardNumberBox.innerText = cardNumberInput.value;
}

cvvInput.oninput = () => {
    cvvBox.innerText = cvvInput.value;
}




