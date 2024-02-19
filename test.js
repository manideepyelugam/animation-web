const h1 = document.querySelectorAll("h1")
const right = document.querySelector(".right")


h1.forEach((e) => {
    e.addEventListener("click",()=>{
      a =   e.getAttribute("data-text")
      right.style.backgroundColor = `${a}`
    })
})



