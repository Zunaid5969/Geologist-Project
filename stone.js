class stone{
    constructor(x,y){
        var options ={
         restitution:0.8,
         density:12,
         friction:0.9
        }
       this.body=Bodies.rectangle(x,y,50,50,options);
       this.width=50;
       this.height=50;
       World.add(world,this.body);
    }
    display(){
     var p=this.body.position;
     var ang=this.body.angle;
     
     push();
     translate(p.x,p.y);
     rotate(angle);
     strokeWeight(3);
     stroke('white');
     fill('yellow');
    rect(0,0,this.width,this.height);
     pop();
    }
}
