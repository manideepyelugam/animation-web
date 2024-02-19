const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });



const fixed = document.querySelector(".fixed")
const cont = document.querySelector(".elem-con")


cont.addEventListener("mouseenter",() => {
     fixed.style.display = "block"
})

cont.addEventListener("mouseleave",() => {
  fixed.style.display = "none"
})

const elems = document.querySelectorAll(".elem")

elems.forEach((e) => {
  e.addEventListener("mouseenter",() => {
    a = e.getAttribute("data-img")
    fixed.style.backgroundImage = `url(${a})`
  })
   
})



const h1Tags = document.querySelectorAll('.h1');
const right = document.querySelector(".rigg")
const down = document.querySelector(".down")

h1Tags.forEach(h1Tag => {
  h1Tag.addEventListener('click', () => {
    const clickedElement = h1Tag;
    a = clickedElement.getAttribute("data-imgg")
    right.style.backgroundImage = `url(${a})`

    b = clickedElement.getAttribute("data-text")
    down.innerHTML = b
    


    h1Tags.forEach(element => {
      if (element !== clickedElement) {
        element.style.color = 'rgb(117, 116, 116)';
      } else {
        element.style.color = 'white';
      }
    });
  });
});


const loader = document.querySelector(".loader")
setTimeout(() => {
    loader.style.top = "-100%"
},4000)








