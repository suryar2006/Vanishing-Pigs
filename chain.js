class Chain{
    constructor(body1,body2){
        var options  =  {
            bodyA:  body1,
            bodyB:  body2,
            stiffness:  0.04,
            length:  10
        };
        this.bodyA = body1;
        this.bodyB  =  body2;
        this.chain  =  Matter.Constraint.create(options);
        World.add(world,  this.chain);
    }
    display() {
        line(this.bodyA.position.x, this.bodyA.position.y, this.bodyB.position.x, this.bodyB.position.y);   
    }
}