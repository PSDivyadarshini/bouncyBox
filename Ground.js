class Ground{
constructor(){

    var groundOptions={
        isStatic:true
    }
    this.body=Bodies.rectangle(200,390,400,20,groundOptions);
    this.width=400;
    this.height=20;
    World.add(world,this.body);
}

   display(){
    var pos=this.body.position;
    push();
    rectMode(CENTER);
    strokeWeight(4);
    stroke("yellow");
    fill("brown");
    rect(pos.x,pos.y,this.width,this.height);
    pop();
   }




    
}