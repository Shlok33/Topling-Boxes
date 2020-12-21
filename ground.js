class Ground{

    constructor(x,y,width,height){
    
    // properties
    var ground_options={
    isStatic : true 
    }
    
    this.body=Bodies.rectangle(x,y,width,height,ground_options)
    this.width=width;
    this.height=height;
    World.add(world,this.body)
    }
    
    // functions
    display(){
    var pos=this.body.position;
        rectMode(CENTER)
        fill("green")
        rect(pos.x, pos.y, this.width, this.height)
    }
    
    
    
    }