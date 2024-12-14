const decbtn = document.getElementById("dec");
const incbtn = document.getElementById("inc");
const resbtm = document.getElementById("res");
let lab = document.getElementById("num");
let count=0;
decbtn.onclick = function(){
    count--;
    lab.textContent = count;
}

incbtn.onclick = function(){
    count++;
    lab.textContent = count;
}

resbtm.onclick = function(){
    count = 0;
    lab.textContent = count;
}