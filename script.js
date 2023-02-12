
// Dom-tree för datum/månad/år.
console.log("Hej")
const n = new Date();
const y = n.getFullYear ();
const m = n.getMonth() + 1;
const d = n.getDate ();
document.getElementById("date").innerHTML = m + " / " + d + " / " + y;

// Dom-tree för en fungerade funktionsklocka som tickar med sekundrar.
function updateClock(){
    const clock=   
document.getElementById ("clock");
     const now= new Date();
     clock.innerText = now.toLocaleTimeString();
 
}
setInterval(updateClock, 1000);

// Dom-tree med ett document för att kunna trycka på en funktionsknapp för att
//gå till Chas Academy hemsida.
const btn = document.getElementById("myBtn");
  btn.addEventListener("click", function() {
    window.location.href = "https://chasacademy.se/";
  });
  
document.querySelector("#example").style.fontSize = "5vw";