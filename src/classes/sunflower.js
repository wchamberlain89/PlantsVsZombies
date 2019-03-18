export class Sunflower {
  constructor() {
    this.hp = 100;
    this.name = "sunflower";
    this.cost = 50;
    this.imgSrc = "<img src='assets/images/sunflower.gif'>"
  }
  ability(target){
    setInterval( function(){
      target.sunQty += 20;
    },2000);
  }
}
