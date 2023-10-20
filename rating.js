const btns= document.querySelectorAll('.btn');
const btnClicked = (btns)=>{
    let score = btns.textContent;
    console.log(score);}
btns.addEventListener("clicked", btnClicked)
