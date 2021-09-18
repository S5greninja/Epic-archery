class Computerbase{
    constructor(x,y,width,height){
        var base_options = {
        isStatic:true
        };
        this.Base = Bodies.rectangle(x,y,width,height,base_options)
        this.height = height
        this.width = width
        this.image = loadImage("./assets/base2.png");

        World.add(world,this.Base);


    }
    display(){
        var pos = this.Base.position
        var angle = this.Base.angle

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)

        pop()


    }
  

    
}