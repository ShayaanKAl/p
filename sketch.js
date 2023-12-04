
let ground, groundImage, player, playerImage, platform, platformGroup, AI, AIImage, arrow, arrowImage, portal, portalImage

var invisibleGround, invisibleGround2, crate, crateImage,crateGroup, trampoline, trampolineImage, time, displayTime
function preload(){
  groundImage = loadImage("../Assets/Images/Ground.png")
  platformImage = loadImage("../Assets/Images/Ground.png")
  playerImage = loadImage("../Assets/Images/Player.png")
  AIImage = loadImage("../Assets/Images/AI.png")
  arrowImage = loadImage("../Assets/Images/Arrow.png")
  portalImage = loadImage("../Assets/Images/Portal.png")
  crateImage = loadImage("../Assets/Images/Crate.png")
  trampolineImage = loadImage("../Assets/Images/Trampoline.png")

}

displayTime = 120
//time = 3600

function setup(){
  createCanvas(1490,740);
  ground = createSprite(700,740, 3000, 55)
  ground.addImage(groundImage)
  ground.scale = 10


  // sprites creation

  player = createSprite(70,40, 20, 25)
  player.addImage(playerImage)
  player.scale = 1.5

  AI = createSprite(740,40, 20, 25)
  AI.addImage(AIImage)
  AI.scale = 1.5

  arrow = createSprite(70,35)

  arrow.position = player.position
  arrow.addImage(arrowImage)
  arrow.scale = 0.5



  invisibleGround = createSprite(0,100,10,10000);
  invisibleGround.visible = false;

  invisibleGround2 = createSprite(1490,100,10,10000);
  invisibleGround2.visible = false;


  platformGroup = new Group()
  crateGroup = new Group()
  

  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()
  createPlatform()

  createCrate()
  createCrate()
  createCrate()
  createCrate()
  createCrate()

  createPortal()

  createTrampoline()



}

setInterval(tag, 200);
setInterval(createPortal, 20000);
setInterval(createTrampoline, 20000);
//setInterval(timer, 1000);

function draw(){
  //set background color 
  background("blue");

  fill("white")
  textSize(50)
  text(displayTime, 50, 50)

  // 
  //timer()

  if(player.collide(portal)){
    player.y = Math.round(random(1, 740))
    player.x = Math.round(random(1, 490))


  }

  if(player.collide(trampoline)){
    player.y = player.y - 100


  }

  if(AI.collide(portal)){
    AI.y = Math.round(random(1, 740))
    AI.x = Math.round(random(1, 490))

  }

  if(AI.collide(trampoline)){
    AI.y = AI.y - 100


  }

  if(arrow.position == AI.position){

    if (keyDown("D")){
      AI.x = AI.x + 7
    }
  
    if (keyDown("A")){
      AI.x = AI.x - 7
    }
  
    if (keyDown("w")){
      AI.y = AI.y - 10
    }

    if (keyDown("right_arrow")){
      player.x = player.x + 5
    }
  
  
    if (keyDown("up_arrow")){
      player.y = player.y - 10
    }
  
  
    if (keyDown("left_arrow")){
      player.x = player.x - 5
    }
  }

  if(arrow.position == player.position){

    if (keyDown("right_arrow")){
      player.x = player.x + 7
    }
  
  
    if (keyDown("up_arrow")){
      player.y = player.y - 10
    }
  
  
    if (keyDown("left_arrow")){
      player.x = player.x - 7
    }

    if (keyDown("D")){
      AI.x = AI.x + 5
    }
  
    if (keyDown("A")){
      AI.x = AI.x - 5
    }
  
    if (keyDown("w")){
      AI.y = AI.y - 10
    }

  }

  // if (keyDown("right_arrow")){
  //   player.x = player.x + 5
  // }


  // if (keyDown("up_arrow")){
  //   player.y = player.y - 10
  // }


  // if (keyDown("left_arrow")){
  //   player.x = player.x - 5
  // }

  // if (keyDown("D")){
  //   AI.x = AI.x + 5
  // }

  // if (keyDown("A")){
  //   AI.x = AI.x - 5
  // }

  // if (keyDown("w")){
  //   AI.y = AI.y - 10
  // }

  player.collide(ground);
  player.collide(platformGroup);
  player.collide(invisibleGround);
  player.collide(invisibleGround2);
  player.collide(crateGroup);


  player.velocityY = player.velocityY + 0.4

  AI.collide(ground);
  AI.collide(platformGroup);
  AI.collide(invisibleGround);
  AI.collide(invisibleGround2);
  AI.collide(crateGroup);

  AI.velocityY = AI.velocityY + 0.4

  drawSprites();


  
}

function createPlatform(){
  if (frameCount% 100 === 0){
   platform = createSprite(100, 400, 100 ,20)
    platform.y = Math.round(random(80, 740))
    platform.x = Math.round(random(1, 1490))
    platform.addImage(platformImage)

    platformGroup.add(platform)
  }
}

function createCrate(){
  if (frameCount% 100 === 0){
   crate = createSprite(100, 400, 100 ,20)
    crate.y = Math.round(random(80, 740))
    crate.x = Math.round(random(1, 1490))
    crate.addImage(crateImage)

    crateGroup.add(crate)

  }
}


function createTrampoline(){
  
    trampoline = createSprite()
    trampoline.y = Math.round(random(80, 740))
    trampoline.x = Math.round(random(1, 1490))
    trampoline.addImage(trampolineImage)
    trampoline.scale = 0.4

    trampoline.lifetime = 600;

  
}

function createPortal(){
  
   portal = createSprite(100, 400, 100 ,20)
    portal.y = Math.round(random(1, 740))
    portal.x = Math.round(random(1, 1490))
    portal.addImage(portalImage)

    portal.lifetime = 600;



  
}



function tag(){

    if (player.collide(AI)){

      if(arrow.position == player.position){
        arrow.position = AI.position
      }
  
      else{
        arrow.position = player.position
      }

    }
    else{
      arrow.position = arrow.position
    }
  }
    




//function timer(){


  // time = time - 1

  // if(time == 0 && arrow.position == player.position){
  //   alert("Red Wins!!!");
  // }

  // else{
  //   if(time == 0 && arrow.position == AI.position){
  //     alert("Blue Wins!!!");
  //   }
  //   }
 // }

  function display(){
    displayTime = displayTime - 1

    if(displayTime == -1 && arrow.position == player.position){
      alert("Red Wins!!!");
    }
  
    else{
      if(displayTime == -1 && arrow.position == AI.position){
        alert("Blue Wins!!!");
      }
      }


  }
setInterval(display, 1000)


