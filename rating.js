const btns= document.querySelectorAll('.btn');

btns.forEach((btn)=>{
 btn.addEventListener("click", ()=>{
    let score = btn.textContent;
    console.log(score);});});