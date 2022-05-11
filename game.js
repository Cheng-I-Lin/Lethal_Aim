//Adds projectile bullets
class bullets{
    constructor(x,y,type=weapon,damage=weaponDamage,connect=false,draw=true) {
        this.x=x;
        this.y=y;
        this.type=type;
        this.damage=damage;
        //See if the bullet connects with something
        this.connect=connect;
        this.draw=draw;
    }
    hitEnemy(){
        this.connect=true;
        this.draw=false;
    }
}
var weapon="";
var weaponDamage=1;
var currentLevel=1;
var level=[
    [[]]
]
var player={
    x:0,
    y:0,
    size:50,
    inventory:[],
    health:100,
    dead:false
}
const aim=document.getElementById("aim");
var mouseX;
var mouseY;
document.addEventListener('mousemove',function(mouse){
    mouseX=mouse.x;
    mouseY=mouse.y;
    //Positions aim with the mouse
    aim.style.left=mouse.x-(aim.offsetWidth/2)+"px";
    aim.style.top=mouse.y-(aim.offsetHeight/2)+"px";
});

function drawMap(){

}
function drawPlayer(){

}
const settings=document.getElementById("settings");
function openSettings(){
    if(settings.style.bottom=="0%"){
        settings.style.bottom="100%";
    } else{
        settings.style.bottom="0%";
    }
}
function tutorial(){

}
const allWeapons=document.getElementById("allWeapons");
function showWeapons(){
    if(allWeapons.style.bottom=="0%"){
        allWeapons.style.bottom="100%";
    } else{
        allWeapons.style.bottom="0%";
    }
}
const intro=document.getElementById("intro");
function playGame(){
    if(intro.style.bottom=="100%"){
        intro.style.bottom="0%";
    } else{
        intro.style.bottom="100%";
    }
}
function back(){
    allWeapons.style.bottom="100%";
    settings.style.bottom="100%";
}
function selectLvl(id){
    switch(id){
        case "lvl1":
            break;
        default:
            break;
    }
}
function overEnemy(x,y){
    if(x>100){
        aim.style.color="red";
    } else{
        aim.style.color="black";
    }
}
//Shoots bullets at the designated locations
document.addEventListener("click",function(mouse){

})

setInterval(function(){
    drawMap();
    drawPlayer();
    //Checks if mouse is over enemy
    overEnemy(mouseX,mouseY);
},20);