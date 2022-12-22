// Todo: Make M+ M- and MC functional
let string = "";
let button1 = document.querySelector('.button1');
let buttons = document.querySelectorAll('.button');
button1.addEventListener('click',(e)=>{
  if(e.target.innerHTML == 'C'){
    string = ""
    document.querySelector('input').value = string;
  }
});
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
   
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
  })
})