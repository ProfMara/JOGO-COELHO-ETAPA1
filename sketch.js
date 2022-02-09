const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var solo, corda, fruta, fruta_prop, conexao_fruta_corda;

function setup() {
    createCanvas(500, 700);
    frameRate(80);
    engine = Engine.create();
    world = engine.world;
    solo = new Ground(200, 680, 600, 20);

    rectMode(CENTER);
    ellipseMode(RADIUS);
    textSize(50)

}

function draw() {
    background(51);

    solo.show();

    Engine.update(engine);




}