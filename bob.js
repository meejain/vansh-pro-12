class BOB
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=200;
		this.r=20
		this.body=Bodies.circle(x,200,20, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var BOBPos=this.body.position;		

			push()
			translate(BOBPos.x, BOBPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			circle(0);
			pop()
			
	}

}

