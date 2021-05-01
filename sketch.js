var gameState;
var txt,button;
var b;
var namep;
var mon,mi;
var n,i;
var logo,l;
var click;
var cho,c;
var bg,bgd;
var bg2;
var player;
var emon;
var build,sprite;

function preload()
{

    b=loadImage("button.png");
    n=loadImage("do.png");
    i=loadImage("dorami.png");
    logo=loadImage("logo.png");
    cho=loadImage("Choose Avatar.png");
    bg2=loadImage(("image.png"))
    //bg=loadImage("bg.png");
    //bgd=loadImage("bgd.png");
    emon=loadAnimation("1.png","2.png","3.png","4.png","5.png");

}

function setup()
{
createCanvas(displayWidth,displayHeight);

txt=createInput("Enter Name Here:");
txt.position(width/2-100,height/2+50);
txt.style("font-size","20px");
txt.hide();

button=createSprite(width/2,height/2+200);
button.addImage(b);
button.scale=0.5;
button.visible=false;

mon=createSprite(width/2-300,height/2+70);
mon.addImage(n);
mon.scale=2.9;
mon.visible=false;

mi=createSprite(width/2+300,height/2+50);
mi.addImage(i);
mi.scale=1;
mi.visible=false;

l=createSprite(width/2+300,350);
l.addImage(logo);
l.scale=1.5;
l.visible=false;

c=createSprite(width/2,200);                 
c.addImage(cho);
c.scale=1;
c.visible=false;

build=new Group();

sprite=createSprite(-420,375,345,10);
sprite.visible=false;
build.add(sprite);

sprite=createSprite(-130,410,140,10);
sprite.visible=false;
build.add(sprite);

sprite=createSprite(305,400,140,10);
sprite.visible=false;
build.add(sprite);

sprite=createSprite(1040,380,365,10);
sprite.visible=false;
build.add(sprite);

sprite=createSprite(1980,380,355,10);
sprite.visible=false;
build.add(sprite);

sprite=createSprite(2280,410,140,10);
sprite.visible=false;
build.add(sprite);

sprite=createSprite(2720,400,140,10);
sprite.visible=false;
build.add(sprite);

sprite=createSprite(2720,400,140,10);
sprite.visible=false;
build.add(sprite);

player=createSprite(-420,0);
player.addAnimation("run",emon);
player.scale=0.5;
player.visible=false;

gameState=2;

}

function draw()
{
    background(215);

    if(gameState==0)
    {
        txt.show();
        button.visible=true;
        l.visible=true;
        if(mouseIsOver(button)&&mouseWentDown("leftButton"))
        {
            txt.hide();
            button.visible=false;
            l.visible=false;
            namep=txt.value();
            gameState=1;
        }
    } else if(gameState==1)
    {
        mon.visible=true;
        mi.visible=true;
        c.visible=true;
        //textSize(70);
        //fill("#00FFCD");
        //text("Choose Avtar",width/2-200,100);
        if(mousePressedOver(mon))
        {
            click="doraemon";
            gameState=2;
        } else if(mousePressedOver(mi))
        {
            click="dorami";
            gameState=2;
        }
       
    } else if(gameState==2)
    {
        // check condition for avatar
        mon.visible=false;
        mi.visible=false;
        c.visible=false;
        player.visible=true;
        //emon.position(player.x,player.y);
       //text("Welcome  "+ click,width/2,height/2);
      // textSize(30);
      // text(mouseX+","+mouseY,mon.x,mon.y-100);
       console.log(mon.x);

       player.collide(build);

       if(keyWentDown("w"))
       {
           player.velocityY=-14;
       }
       player.velocityY+=0.5;

       player.velocityX=0;

       if(keyDown("a"))
       {
           player.velocityX=-5;
       }

       if(keyDown("d"))
       {
           player.velocityX=5;;
       }

        camera.position.x=player.x+460;
        stage1();
    }

    drawSprites();

}

function stage1()
{
    //image(bgd,-942.5,0,945,height);
    //image(bg,0,0,width*5,height);
    image(bg2,-600,0,width*5,height);
}