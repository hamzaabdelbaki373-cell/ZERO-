const words=[

"Video Editor",

"Graphic Designer",

"Content Creator",

"Motion Designer"

];

let i=0;

let j=0;

let current="";

let isDeleting=false;

function type(){

current=words[i];

if(!isDeleting){

document.getElementById("typing").textContent=current.substring(0,j++);

if(j>current.length){

isDeleting=true;

setTimeout(type,1200);

return;

}

}else{

document.getElementById("typing").textContent=current.substring(0,j--);

if(j===0){

isDeleting=false;

i++;

if(i===words.length)i=0;

}

}

setTimeout(type,isDeleting?60:120);

}

type();

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity=0;

sec.style.transform="translateY(80px)";

sec.style.transition="1s";

observer.observe(sec);

});