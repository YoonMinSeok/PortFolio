
const content = "Developer 윤민석의 포트폴리오입니다"
const text = document.querySelector(".typer_content")
let index = 0;

setInterval(function (){
  if(index < content.length){
    text.textContent += content[index++]
  }
},200);

window.onload = function(){
  window.scrollTo({top:0, left:0, behavior:'smooth'});
}


function home(){
  window.scrollTo({top:0, left:0, behavior:'smooth'});
};

function about(){
  window.scrollTo({top:756, left:0, behavior:'smooth'});
};
function skills(){
  window.scrollTo({top:1127, left:0, behavior:'smooth'});
};

function project(){
  window.scrollTo({top:1927, left:0, behavior:'smooth'});
};

function contact(){
  window.scrollTo({top:3170, left:0, behavior:'smooth'});
};

