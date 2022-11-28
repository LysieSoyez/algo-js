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
    list_Rect=[]
    for(i=0;i<1000;i++){
        randomx=Math.floor(Math.random() * 11);
        randomy=Math.floor(Math.random() * 11);
        random_width=Math.floor(Math.random() * 11);
        while(random_width==0){
            random_width=Math.floor(Math.random() * 11);
        }
        random_length=Math.floor(Math.random() * 11);
        while(random_length==0){
            random_length=Math.floor(Math.random() * 11);
        }
        Rect_i=new rectangle(randomx,randomy,random_width,random_length)
        list_Rect.push(Rect_i)
    }
    for (i=0;i<1000;i++){
        list_collides_i=[]
        j=0
        while (j!=1000){
            if (j==i){
                j++
                continue
            }
            else{
                if(list_Rect[i].collides(list_Rect[j])){
                    list_collides_i.push(list_Rect[j])
    
                }
                j++
            }
        }
        console.log(list_collides_i)
    }