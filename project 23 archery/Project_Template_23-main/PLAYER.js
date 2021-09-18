class Player{
    constructor(x,y,width,height){
        var base_options = {
        isStatic:true
        };
        this.player = Bodies.rectangle(x,y,width,height,base_options)
        this.height = height
        this.width = width
        this.image = loadImage("./assets/player.png");

        World.add(world,this.player);


    }
    display(){
        var pos = this.player.position
        var angle = this.player.angle

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)

        pop()


    }
  

    
}