class Computer{
    constructor(x,y,width,height){
        var base_options = {
        isStatic:true
        };
        this.computer = Bodies.rectangle(x,y,width,height,base_options)
        this.height = height
        this.width = width
        this.image = loadImage("./assets/player.png");

        World.add(world,this.computer);


    }
    display(){
        var pos = this.computer.position
        var angle = this.computer.angle

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)

        pop()


    }
  

    
}