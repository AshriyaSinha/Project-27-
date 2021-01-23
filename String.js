class Chain{
    constructor(bodyA, bodyB){
        var options = {
            roof: bob1,
            roof: bob2,
            roof: bob3,
            roof: bob4,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.string);
    }
    display(){
        strokeWeight(4);
        
    }
}