const btns= document.querySelectorAll('.btn');

//btns is a nodelist so you can't add addEventListener to all of them without forEach
btns.forEach((btn)=>{
 btn.addEventListener("click", ()=>{
    let score = btn.textContent;
    console.log(score);});});