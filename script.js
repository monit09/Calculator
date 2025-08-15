let icons = document.querySelectorAll(".icon");
let input = document.querySelector(".input");
let output= document.querySelector(".output");
function userInput(icon){
  return icon.dataset.value || icon.innerText;
}
icons.forEach((icon)=>{
icon.addEventListener("click",()=>{
 let iconText = userInput(icon);
 if(iconText=="AC"){
  input.innerText="0";
  output.innerText="";
 }
 else if(iconText=="="){
  try{
let expression=input.innerText.replace(/÷/g,'/').replace(/%/g,'/100');
let result = eval(expression);
output.innerText= result;}
catch{
  output.innerText="error";
}
}
else if(icon.id=="cut"){
input.innerText = input.innerText.slice(0,-1);
}
 else{
  if(input.innerText=="0"){
    input.innerText=iconText;
  }
  else{
  input.innerText= input.innerText+iconText;
 }}
});
});

