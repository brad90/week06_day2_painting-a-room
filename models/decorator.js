const Decorator = function(){
  this.paintStock = 0;
}
Decorator.prototype.addingPaintToStock = function (addPaintCan) {
  return this.paintStock += addPaintCan;
};

Decorator.prototype.calculateLitresInStock = function () {
  return this.paintStock * 1
};

Decorator.prototype.calculateCanIPaintRoom = function (roomArea) {
  if(this.paintStock >= roomArea){
    return true
  };
  return false;
};

Decorator.prototype.paintingTheRoom = function (areaPainted) {
  return this.paintStock -= areaPainted;
};






module.exports =Decorator
