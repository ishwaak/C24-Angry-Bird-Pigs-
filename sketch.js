const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1 ;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,390,60,60);
    box2 = new Box(1000,390,60,60);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig (900,390)
    log1 = new Log (900,320,275,PI/2)

    box3 = new Box(800,290,60,60);
    box4 = new Box(1000,290,60,60);
    pig2 = new Pig (900,290)
    log2 = new Log (900,240,275,PI/2)

    box5 = new Box(900,190,60,60);

    log3 = new Log(850,100,110,PI/4)
    log4 = new Log(950,100,110,-PI/4)

    bird = new Bird(200,200)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}