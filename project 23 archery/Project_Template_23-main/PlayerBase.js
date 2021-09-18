class Playerbase{
    constructor(x,y,width,height){
        var base_options = {
        isStatic:true
        };
        this.playerBase = Bodies.rectangle(x,y,width,height,base_options)
        this.height = height
        this.width = width
        this.image = loadImage("./assets/base1.png");

        World.add(world,this.playerBase);


    }
    display(){
        var pos = this.playerBase.position
        var angle = this.playerBase.angle

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)

        pop()


    }
  

    
}