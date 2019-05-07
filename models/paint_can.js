const PaintCan = function(){
  this.volume = 10;
}

PaintCan.prototype.paintRoom = function (volume) {
  return this.volume -= volume

};


module.exports = PaintCan;
