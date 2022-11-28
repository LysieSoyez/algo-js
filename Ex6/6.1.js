class Circle{
    constructor(xPos, yPos, Radius){
        this.xPos=xPos;
        this.yPos=yPos;
        this.Radius=Radius;
    }
    move(xOffset,yOffset){
            this.xPos=this.xPos+xOffset;
            this.yPos=this.yPos+yOffset;
        }
    
    get surface(){
        return Math.PI*Math.pow(this.Radius,2);
    }
}
let circle = new Circle(2,6,7);
console.log(circle.xPos, circle.yPos, circle.Radius)

circle.move(1,1)   
console.log(circle.xPos, circle.yPos, circle.surface)
