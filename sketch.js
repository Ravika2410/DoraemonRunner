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
var build,sprite,sprite2;
var dorae,imple;
var y,t;
var speed;
var rat,r;

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
    dorae=loadImage("l.png");
    y=loadImage("o.png");
    r=loadAnimation("rat.png","rat (1).png","rat (2).png","rat (3).png","rat (4).png","rat (5).png","rat (6).png","rat (7).png");

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

/*l=createSprite(width/2+300,350);
l.addImage(logo);
l.scale=1.5;
l.visible=false;*/

c=createSprite(width/2,200);                 
c.addImage(cho);
c.scale=1;
c.visible=false;

t=createSprite(width/2-350,200);                 
t.addImage(y);
t.scale=1.3;
t.visible=false;

imple=createSprite(width/2,250);
imple.addImage(dorae);
imple.scale=0.9;
imple.visible=false;

build=new Group();
build2=new Group();
rat=new Group();

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

sprite=createSprite(3450,380,360,10);
sprite.visible=false;
build.add(sprite);

sprite=createSprite(4675,410,140,10);
sprite.visible=false;
build.add(sprite);

sprite=createSprite(4975,390,350,10);
sprite.visible=false;
build.add(sprite);

sprite2=createSprite(5600,520,350,10);
sprite2.visible=false;

sprite=createSprite(3010,410,550,10);
sprite.visible=false;
build.add(sprite);

player=createSprite(-420,0);
player.addAnimation("run",emon);
player.scale=0.5;
player.visible=false;

gameState=2;
speed=20;

}

function draw()
{
    background(220);

    if(gameState==0)
    {
        txt.show();
        button.visible=true;
       // l.visible=true;
        imple.visible=true;
        if(mouseIsOver(button)&&mouseWentDown("leftButton"))
        {
            txt.hide();
            button.visible=false;
            imple.visible=false;
          //  l.visible=false;
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
       
    } else if (gameState==2)
    {
        mon.visible=false;
        mi.visible=false;
        c.visible=false;
        t.visible=true;
        textSize(80);
        fill("#00DCFF");
        text("INSTRUCTIONS",width/2-200,200);
        textSize(30);
        fill("#00FFCD");
        text("1. Use 'w' for jumping,'a' for back going and'd' for forward going.",width/2-300,400);
        text("2. Collect the coin and score +1.",width/2-300,400+50);
        text("3. Collect the rat or fall down then, the GAME OVER.",width/2-300,400+100);
        text("4. Press SpaceBar to start the game.",width/2-300,400+150);

        if(keyWentDown(32))
        {
            player.visible=true;
            gameState=3;
        }

    }else if(gameState==3)
    {
        // check condition for avatar
        c.visible=false;
        t.visible=false;
        //emon.position(player.x,player.y);
       //text("Welcome  "+ click,width/2,height/2);
      // textSize(30);
      // text(mouseX+","+mouseY,mon.x,mon.y-100);
       player.collide(build);
       player.collide(build2);

       if(keyWentDown("w"))
       {
           player.velocityY=-14;
       }
       player.velocityY+=0.5;

       player.velocityX=0;
       if(keyDown("a"))
       {
           player.velocityX=-speed;
       }

       if(keyDown("d"))
       {
           player.velocityX=speed;;
       }

       if(player.x<4693.5)
        camera.position.x=player.x+460;

        if(player.x%1000==0)
        {
            speed+=2;
        }
        console.log(speed);
        stage1();

        if(player.collide(sprite2))
        {
            player.visible=false;
        }

        if(player.collide(rat))
        {
           gameState=4;
        }
    } else if(gameState==4)
    {

    }

    textSize(30);
    fill(0);
    text(player.x+","+player.y,player.x,player.y-200);

    drawSprites();

}

function stage1()
{
    //image(bgd,-942.5,0,945,height);
    //image(bg,0,0,width*5,height);
    image(bg2,-600,0,width*5,height);

    if(frameCount%60==0)
    {
        var fl=createSprite(860,Math.round(random(420,600)),100,20);
        fl.velocityX=-3;
        fl.lifetime=120;
        build2.add(fl);

      /*  fl=createSprite(fl.x,fl.y-10,100,20);
        fl.addAnimation("rat",r);
        fl.mirrorX(-1);
        fl.velocityX=-5;
        fl.lifetime=120;
        rat.add(fl);*/

        fl=createSprite(1820,Math.round(random(420,600)),100,20);
        fl.velocityX=-3;
        fl.lifetime=180;
        build2.add(fl);

        fl=createSprite(4382,Math.round(random(420,800)),100,20);
        fl.velocityX=-3;
        fl.lifetime=240;
        build2.add(fl);

    }

    if(frameCount%240==0)
    {
       var a=[1040,1980,3010,3450,4675];
       var r=Math.round(random(0,4));
       var w=[380,380,410,380,410];

       console.log(a[r],w[r]);
       var op=createSprite(a[r],w[r],100,20);
       op.addAnimation("rat",r);
       op.mirrorX(-1);
       op.velocityX=-5;
       op.lifetime=150;
       rat.add(op);
    }
}
