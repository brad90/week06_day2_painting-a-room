const Room = function(area){

  this.area = area;
  this.areaPainted = 0
}

Room.prototype.paintRoom = function (area) {
  return this.areaPainted += area

};


module.exports = Room;
