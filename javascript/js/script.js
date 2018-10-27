function bmi(){
    let h = document.getElementById("height").value/100;
    let w = document.getElementById("weight").value;
    console.log(h);
    console.log(w);
    let b = w / Math.pow(h,2);
    
    console.log(b);
}
let btn = document.getElementById("cal");
// btn.addEventListener("click",bmi);
btn.addEventListener("click",bmi);
