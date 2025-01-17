let gameSeq =[];
let userSeq =[];
let btns=["red","green","yellow","purple"]
let started=false;
let level=0;
let h2=document.querySelector("h2");
let high=document.querySelector("#a");


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function  levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx = Math.floor(Math.random() *3);
    let randcolor = btns[randIdx];
    let randBtn= document.querySelector(`.${randcolor}`);
    // console.log(randIdx)
    // console.log(randcolor)
    // console.log(randBtn)
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameflash(randBtn);
    
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length=== gameSeq.length){
            setTimeout(levelUp,1000);

        }
        console.log("same value");
        
        // let n=`${level}`;
        // if(n>num){
        //     num=n;
        let highscore=`${level}`;

        high.innerText=`Highest score = ${highscore}`;
        document.querySelector("body").append("highscore");
        // }
    }else{
        h2.innerHTML=`Game Over!Your score was <b>${level}</b><br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";    
        },150);
        reset();
    }
}



function btnPress(){
    // console.log(this);
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    
    let highscore=`${level}`;
    gameSeq=[];
    userSeq=[];
    level=0;
}