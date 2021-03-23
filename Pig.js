class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
     this.visibility=255 // 255 because 11111111 is the higehest byte
  }
display(){
  //console.log('I am in display')
  
  //console.log(this.body.speed)
  if(this.body.speed>3){
   World.remove(
     world,this.body
   )
   push()
    tint(255,this.visibility)
    this.visibility=this.visibility-10
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop() 
  }else{
    super.display()
      
  }
}
};