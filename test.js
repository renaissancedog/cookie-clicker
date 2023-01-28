var cookie = createSprite(200, 200);
var score=0;
var roundscore=0;
var debug=false;
var mouse=0;
var buymouse = createSprite(350, 50);
var mousecost=15;
var roundmousecost=15;
buymouse.setAnimation("blank");
buymouse.debug=debug;

var grandma=0;
var buygrandma = createSprite(350, 150);
var grandmacost=100;
var roundgrandmacost=100;
buygrandma.setAnimation("blank");
buygrandma.debug=debug;

World.frameRate=60;
function draw() {
  background("white");

  text(roundscore+" cookies", 0, 15);
  text("You have "+mouse+" cursors. Buy a mouse for "+roundmousecost + " cookies.", 300, 10, 100, 100);
  text("You have "+grandma+" grandmas. Buy a grandma for "+roundgrandmacost + " cookies.", 300, 100, 100, 100);

  cookie.setAnimation("cookie");
  cookie.scale = 0.4;
  drawSprites();
  
  if (mouseWentDown("leftButton")&&mouseIsOver(cookie)) {
    score+=1;
    console.log(score);
    
  }
  if (mouseWentDown("leftButton")&&mouseIsOver(buymouse)&&(score>=mousecost)) {
    score-=mousecost;
    mousecost*=1.15;
    roundmousecost=(Math.round(mousecost));
    mouse+=1;
    
  }
  if (mouseWentDown("leftButton")&&mouseIsOver(buygrandma)&&(score>=grandmacost)) {
    score-=grandmacost;
    grandmacost*=1.15;
    roundgrandmacost=(Math.round(grandmacost));
    grandma+=1;
    
  }
  
  score=score+mouse/300;
  roundscore=Math.floor(score);
  console.log(roundscore);
}
