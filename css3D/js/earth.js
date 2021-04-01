// let earth=document.getElementsByTagName('div')[0];
let earth=document.getElementsByClassName('earth')[0];
let circle=document.getElementsByClassName('circle')[0];

let i=0;
earth.addEventListener('click',function(){
  i++;
  if(i%2==1){  
  earth.style.animationPlayState="paused";
  circle.style.display="none";
  }
  if(i%2==0){
  earth.style.animationPlayState="running";
  circle.style.display="block";
  }
})