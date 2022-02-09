let inputCounter = document.querySelector("#geting-data")
let bottonCounter = document.querySelector("#button")
let errorElement = document.querySelector("#error-massage")
let circleBar = document.querySelector(".center ")
let startBox = document.querySelector(".start-box")
let timerCounter =document.querySelector(".percent")
const circlHalf = document.querySelectorAll(".circls-half")
const circlHalfTop = document.querySelector(".circls-half-top")


bottonCounter.addEventListener('click',function(e){
    let second =parseInt( inputCounter.value)

    if (isNaN(second)) {
      errorElement.classList.add('active')  
    return;
    }
    startBox.style.display='none'
    timerCounter.textContent= second;
    let orginalSecond =second
    let timerid =setInterval(() => {
        if (second <=1) {
            clearInterval(timerid)
            startBox.style.display='block'
            timerCounter.classList.remove('active')
            inputCounter.value=''
            
            
        }
        second -= 1
        let percent =((orginalSecond-second)/orginalSecond)*360


        circlHalf.forEach(el =>{
            el.style.transform=`rotate(${percent}deg)`
    
            if(percent>= 180) {
               circlHalf[0].style.transform='rotate(180deg)'
                circlHalfTop.style.opacity='0'
            } else{
                circlHalfTop.style.opacity='1'
            }
        })
        
         timerCounter.textContent= second;
        //  timerCounter.classList.add('active')
        

        

    }, 1000);
})