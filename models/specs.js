const assert = require('assert');
const Room = require('./room.js');
const Decorator = require('./decorator.js');
const PaintCan = require('./paint_can.js');




describe('Room', function(){
  let room;

  beforeEach(function(){
    room = new Room(10);
  });

  it('should have an area', function(){
    const actual = room.area;
    assert.strictEqual(actual, 10);
  });

  it('should start not painted', function(){

    const actual = room.areaPainted;
    assert.strictEqual(actual, 0);
  })

  it('should be able to be painted by given area', function() {
    room.paintRoom(5);
    const actual = room.areaPainted;
    assert.strictEqual(actual, 5);
  })

  describe('PaintCan', function(){
    let paintCan;
    beforeEach(function(){
      paintCan = new PaintCan(5)
    })

    it('should have number of litres of paint', function(){
      const actual = paintCan.volume
      assert.strictEqual(actual, 10)
    })

    it('should deduct area of room painted', function(){
      paintCan.paintRoom(5);
      const actual = paintCan.volume
      assert.strictEqual(actual, 5)
    })


    it('should check if the can is empty', function(){
      paintCan.paintRoom(10);
      const actual = paintCan.volume
      assert.strictEqual(actual, 0)
    })
  })

  describe('Decorator', function(){
    let decorator;
    let room

    beforeEach(function(){
      decorator = new Decorator();
      room = new Room(10);
    })

    it('should add paint to stock', function(){
      decorator.addingPaintToStock(2);
      actual = decorator.paintStock
      assert.strictEqual(actual, 2)
    })

    it('should calculate paint in stock in liters', function(){
      decorator.calculateLitresInStock();
      actual = decorator.paintStock * 1
      assert.strictEqual(actual, 0)
    })

    it('should calculate if cis person can paint room?', function(){
      actual = decorator.calculateCanIPaintRoom(room.area)
      assert.strictEqual(actual, false)
    })

    it('should calculate if cis person can paint room?', function(){
      decorator.addingPaintToStock(10);
      actual = decorator.calculateCanIPaintRoom(room.area)
      assert.strictEqual(actual, true)
    })

    it('should calculate if cis person has painted room?', function(){
      decorator.addingPaintToStock(12);
      decorator.calculateCanIPaintRoom(room.area);
      actual = decorator.paintingTheRoom(room.area);
      assert.strictEqual(actual, 2)
    })

  })

})
