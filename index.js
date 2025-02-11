var colors=["green","red","yellow","blue"];
var sequence=[];
var userSequence=[];
var started= false;
var level=0;
$(document).keydown(function(){
     if(!started){
          $("#level-title").text("Level "+level);
          random();
          started=true;
     }
     
});
$(".btn").click(function(){
     var userSelectedColor=$(this).attr("id");
     userSequence.push(userSelectedColor);
     playSound(userSelectedColor);
     animation(userSelectedColor);
     checkAnswer(userSequence.length-1);
});


function checkAnswer(current){
     if(userSequence[current]===sequence[current]){
          console.log("HEY U R RIGHT...");
     
     if(userSequence.length===sequence.length){
          setTimeout(function(){
               random();
          },1000);
          
     }
}else{
     $("body").addClass("game-over");
     setTimeout(function(){
          $("body").removeClass("game-over");
     },100);
     $("#level-title").text("OVERIDA SHINE BAAKA");
     startOver();
     
}
}
function random(){
     level++;
     userSequence=[];
     $("#level-title").text("Level "+level);
     var randomNumber=Math.floor(Math.random()*4);
     var randomColor=colors[randomNumber];
     $("#"+randomColor).fadeOut(100).fadeIn(100);
     sequence.push(randomColor);
     playSound(randomColor);
}
function playSound(name){
     var audio=new Audio("sounds/"+name+".mp3");
     audio.play();
}

function animation(color){
     $("#"+color).addClass("pressed");
     setTimeout(function(){
          $("#"+color).removeClass("pressed");
     },100);
}

function startOver(){
     started=false;
     level=0;
     sequence=[];
     // userSequence=[];
}
