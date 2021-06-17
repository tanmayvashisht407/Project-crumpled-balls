class Paper
{
    constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
		}
		this.body=Bodies.circle(x,y,r,options)
		this.r=r
		this.image=loadImage("paper.png")
		World.add(world,this.body);
	}
	display(){
		var pos=this.body.position;
		var angle=this.body.angle;
		push();
		imageMode(CENTER);
		image(this.image,pos.x,pos.y,this.r,this.r)
		pop();
	}

}

    
    
        


