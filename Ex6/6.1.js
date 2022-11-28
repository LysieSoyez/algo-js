class Circle{
    constructor(xPos, yPos, Radius){
        this.xPos= xPos;
        this.yPos= yPos;
        this.Radius= Radius;
    }
    move(xOffset, yOffset){
            this.xPos += xOffset;
            this.yPos += yOffset;
        }
    
    get surface(){
        return Math.PI*Math.pow(this.radius,2);
    }
}
    