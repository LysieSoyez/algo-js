class rectangle{
    constructor(topLeftXPos, topLeftYPos, width, length){
    this.topLeftXPos=topLeftXPos,
    this.topLeftYPos=topLeftYPos,
    this.width=width,
    this.length=length
    }
collides(otherRectangle){
    if(this.topLeftXPos+this.length<otherRectangle.topLeftXPos||
        otherRectangle.topLeftXPos + otherRectangle.length < this.topLeftXPos||
        otherRectangle.topLeftYPos < this.topLeftYPos - this.width||
        this.topLeftYPos < otherRectangle.topLeftYPos - otherRectangle.width)
        return false
    else{
        return true
    }
} 
}  
let Rect1=new rectangle(-7,8,-2,4)
let Rect2=new rectangle(-4,4,-1,3)
console.log(Rect1.collides(Rect2))