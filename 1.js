const circlHalf = document.querySelectorAll(".circls-half")
const circlHalfTop = document.querySelector(".circls-half-top")
const percent = document.querySelector(".percent")
document.addEventListener("scroll",()=>{
    const pageViewHeight = window.innerHeight
    const pageEntireHeight = document.documentElement.scrollHeight
    const pageOffSet = window.pageYOffset
    const pagePortionDegree = (pageOffSet/(pageEntireHeight-pageViewHeight)*360)
    const scrolledpercent =Math.floor (pagePortionDegree/360*100)
    percent.textContent=`${scrolledpercent}%`
     
    circlHalf.forEach(el =>{
        el.style.transform=`rotate(${pagePortionDegree}deg)`

        if(pagePortionDegree >= 180) {
           circlHalf[0].style.transform='rotate(180deg)'
            circlHalfTop.style.opacity='0'
        } else{
            circlHalfTop.style.opacity='1'
        }
    })
})