let input=document.querySelector("input");
let btn=document.querySelector("button");
let copy=document.querySelector("#copy");


let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase="abcdefghijklmnopqrstuvwxyz"
let numbers="0123456789"
let symbols="!@#$%^&*()-+=}{][_|><'";
let AllChars=uppercase+lowercase+numbers+symbols;

btn.addEventListener('click',generatepassword);
let length=12;
function generatepassword(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
    while(length>password.length){
        password+=AllChars[Math.floor(Math.random()*AllChars.length)];
    }
input.value=password;

}
copy.addEventListener("click",()=>{
    input.select();
   // document.execCommand("copy"); old one
   navigator.clipboard.writeText(input.value);
   alert(`${input.value} copied to clipboard`);

})