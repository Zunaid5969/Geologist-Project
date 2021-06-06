const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,iron,stone,rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane   = new Plane(600,height,1200,20)
    hammer  = new Hammer(10,100);
    ironobj = new iron(500,500)
    stoneobj = new stone(700,700)
    rubberobj= new rubber(600,600)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    ironobj.display();
    stoneobj.display();
    rubberobj.display();
 
}