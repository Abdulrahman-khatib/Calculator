/*console.log("2")
document.write("ffjfj")
let x = 121;
if (x== 13){
    console.log("right")
} else if ( x < 13){
    console.log("Wrong")
}else{
    console.log("nothing")
}
let y = prompt("age")
console.log(y)
document.getElementById("submit").addEventListener("click",calculate)
function calculate(){
let x = document.getElementById("firstNum").value;
console.log(x)
}
calculate()*/
/*let names =["asda",'gahsh','lilkh']
names[0]= 12
console.log(names[0])*/
/*let car = {
    "model x":{
        "new":"ferari",
        "old":"camry",
        "array":[1,3,7,8]
    },
    "year":2013,
    "speed": 120+"mph"
}
console.log(car["model x"].array[2])*/
/*console.log(Math.floor((Math.random()*10)+15));*/
/*let x = parseFloat(prompt("Enter a number","4321"))
function sd(x){
    return x===13?"right":"wrong"
}
console.log(sd(x))*/
/*let bigger = (a,b)=> {return a>b ?  a :b};
console.log(bigger(9,5))*/
/*function sum(...args){
    let add=0
    for(i=0;i<args.length;i++){
     add+=args[i];
    }
    return add
}
console.log(sum(121,3,1,3,2,3,2))*/
/*let tri = {
    max:12,
    low:2
}
let {max:m,low:l} = tri
console.log(m)*/
/*let mTry={
    max:{
        m:{
            sa:1111,
        aq:12
        },
        l:22
    },
    low:1
}
let {max:{m:{sa:asd} }}= mTry
console.log(asd)*/
/*function makeClass(){
    class car {
    constructor(speed, year){
this._speed = speed+12
this._year = year/3
    }
    get speeed(){
return this._speed
    }
    get yearr(){
        return this._year
    }
    set speeed(s){
        this._speed = s +12
    }
    set yearr(y){
        this._year = y/4
    }
}
return car
}
let Car =  makeClass();
let audie = new Car(12,23);
audie.yearr = 1
console.log(audie.yearr)*/
/*class airPlane{
    constructor(speed){
        this._speed=speed/2
    }
    /*get speeed(){
        return this._speed
    }
    set speeed(s){
        this._speed = s/2
    }*/
/*}
let asd = new airPlane(124)
asd._speed = 22/2
console.log(asd._speed)*/
/*let x = "john"
console.log(`hi my name is ${x}!`)*/
function cclick(){
    let d = document.getElementById("para") 
    d.innerHTML == "does it work ?"?d.innerHTML= "yes it works":d.innerHTML="does it work ?";
}
function cli1(){
    var c = document.getElementById("output")
    c.innerHTML += document.getElementById("1").value;
}
function cli2(){
    var c = document.getElementById("output")
    c.innerHTML += document.getElementById("2").value;
}
function cli3(){
    var c = document.getElementById("output")
    c.innerHTML += document.getElementById("3").value;
}
function cli4(){
    var c = document.getElementById("output")
    c.innerHTML += document.getElementById("4").value;
}
function cli5(){
    var c = document.getElementById("output")
    c.innerHTML += document.getElementById("5").value;
}
function cli6(){
    var c = document.getElementById("output")
    c.innerHTML += document.getElementById("6").value;
}
function cli7(){
    var c = document.getElementById("output")
    c.innerHTML += document.getElementById("7").value;
}
function cli8(){
    var c = document.getElementById("output")
    c.innerHTML += document.getElementById("8").value;
}
function cli9(){
    var c = document.getElementById("output")
    c.innerHTML += document.getElementById("9").value;
}
function cli0(){
    var c = document.getElementById("output")
    c.innerHTML += document.getElementById("0").value;
}
var s = 999912
function Sum(){
    let c = document.getElementById("output")
    s = parseInt(c.innerHTML)
    c.innerHTML = ""
}
var m =999912
function Minus(){
    let c = document.getElementById("output")
    m = parseInt(c.innerHTML)
    c.innerHTML = ""
}
var mu = 999912
function Multi(){
    let c = document.getElementById("output")
    mu = parseInt(c.innerHTML)
    c.innerHTML = ""
}
var d= 999912
function Divide(){
    let c = document.getElementById("output")
    d = parseInt(c.innerHTML)
    c.innerHTML = ""
}
var e = ""
function equal(){
    let c = document.getElementById("output")
    e= parseInt(c.innerHTML)
    if(s!= 999912){
    c.innerHTML= s+e
    m=999912
    mu=999912
    d=999912
    e=999912
    s=999912    
}
    else if(m!= 999912 ){
        c.innerHTML= m-e
        m=999912
        mu=999912
        d=999912
        e=999912
        s=999912
    }
    else if(mu != 999912){
        c.innerHTML= mu*e
        m=999912
        mu=999912
        d=999912
        e=999912
        s=999912
    }
    else if(d!=999912){
        c.innerHTML= d/e
        m=999912
        mu=999912
        d=999912
        e=999912
        s=999912
    }
}
function reset(){
    let c = document.getElementById("output")
    m=999912
    mu=999912
    d=999912
    e=999912
    s=999912
    c.innerHTML=""
}
document.addEventListener("keydown",(ev)=>{
    let c = document.getElementById("output")
    if(ev.key==1){
c.innerHTML +=1
}
else if(ev.key==2){
    c.innerHTML +=2
}
else if(ev.key==3){
    c.innerHTML +=3
}
else if(ev.key==4){
    c.innerHTML +=4
}
else if(ev.key==5){
    c.innerHTML +=5
}
else if(ev.key==6){
    c.innerHTML +=6
}
else if(ev.key==7){
    c.innerHTML +=7
}
else if(ev.key==8){
    c.innerHTML +=8
}
else if(ev.key==9){
    c.innerHTML +=9
}
else if(ev.key==0){
    c.innerHTML +=0
}
else if(ev.key=="+"){
    s = parseInt(c.innerHTML)
    c.innerHTML = ""
}
else if(ev.key=="-"){
     m= parseInt(c.innerHTML)
    c.innerHTML = ""
}
else if(ev.key=="*"){
    mu = parseInt(c.innerHTML)
    c.innerHTML = ""
}
else if(ev.key=="/"){
    d = parseInt(c.innerHTML)
    c.innerHTML = ""
}
else if(ev.key =="s"){
    si=parseInt(c.innerHTML)
    c.innerHTML= Math.sin((Math.PI/180)*(si))
}
else if(ev.key =="c"){
    co=parseInt(c.innerHTML)
    c.innerHTML= Math.cos((Math.PI/180)*(co))
}
else if(ev.key =="t"){
    ta=parseInt(c.innerHTML)
    c.innerHTML= Math.tan((Math.PI/180)*(ta))
}

else if(ev.key=="Delete" || ev.key =="Backspace"){
    m=999912
    mu=999912
    d=999912
    e=999912
    s=999912
    c.innerHTML=""
}
else if(ev.key=="=" || ev.key=="Enter"){
    ev.preventDefault()    
    e= parseInt(c.innerHTML)
        if(s!= 999912){
        c.innerHTML= s+e
        m=999912
        mu=999912
        d=999912
        e=999912
        s=999912
        
    
    }
        else if(m!= 999912 ){
            c.innerHTML= m-e
            m=999912
            mu=999912
            d=999912
            e=999912
            s=999912
        }
        else if(mu != 999912){
            c.innerHTML= mu*e
            m=999912
            mu=999912
            d=999912
            e=999912
            s=999912
        }
        else if(d!=999912){
            c.innerHTML= d/e
            m=999912
            mu=999912
            d=999912
            e=999912
            s=999912
        }
    }
}
)
var si
var co
var ta
function Sin(){
    let c = document.getElementById("output")
    si=parseInt(c.innerHTML)
    c.innerHTML= Math.sin((Math.PI/180)*(si))
}
function Cos(){
    let c = document.getElementById("output")
    co=parseInt(c.innerHTML)
    c.innerHTML= Math.cos((Math.PI/180)*(co))
}
function Tan(){
    let c = document.getElementById("output")
    ta=parseInt(c.innerHTML)
    c.innerHTML= Math.tan((Math.PI/180)*(ta))
}
console.log(Math.cos((Math.PI/180)*(60)))

