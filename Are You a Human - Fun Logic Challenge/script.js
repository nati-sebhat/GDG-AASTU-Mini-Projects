const title = document.getElementById('title');
const btn = document. getElementById('btn');



btn.addEventListener('click', () => {
  let score = 0;

    let sleep = prompt("How many hours a day do you sleep? ");
     if(Number(sleep) >= 4){
      score+=1;
     }

   let music = prompt("Do you enjoy music?"); 
    if(music.toLowerCase() === "yes"){
      score+=1;
    }

  let tired = prompt("Do you get tired?");
   if(tired.toLowerCase() === "yes"){
    score+=1;
   }
     
   if(score>=3){
      alert("You are definitely human!");
   }else if(score > 1){
    alert("Half human, half robot!");
   }
   else if(score<=1){
    alert("Robot detected");
   }

   
   

});
