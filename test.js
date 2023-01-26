var cookie = createSprite(200, 200);
var score=0;
var roundscore=0;
var cursor=0;
var time=0;
var seconds=0;
var buymouse = createSprite(300, 150);
buymouse.setAnimation("buymouse");

World.frameRate=60;
function draw() {
  time+=1;
  seconds=Math.round(time/60);
  background("white");
  cookie.setAnimation("cookie");
  cookie.scale = 0.4;
  drawSprites();
  text(roundscore+" cookies", 0, 15);
  text(seconds+" seconds", 0, 105);
  text("buy mouse", 300, 150);
  if (mouseWentDown("leftButton")&&mouseIsOver(cookie)) {
    score+=1;
    console.log(score);
    
  }
  if (mouseWentDown("leftButton")&&mouseIsOver(buymouse)&&(score>=15)) {
    score-=15;
    cursor+=1;
    
  }
  
  score=score+cursor/300;
  roundscore=Math.floor(score);
  console.log(roundscore);
}
