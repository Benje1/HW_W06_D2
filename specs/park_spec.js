const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
    let park
  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 20);
    dinosaur3 = new Dinosaur('t-rex', 'carnivore', 55);
    dinosaur4 = new Dinosaur('triceratops', 'herbivore', 30);
    park = new Park('Jurassic Park', 20 )

  })

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice
    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function(){
    park.addDinosaurs(dinosaur)
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 1)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaurs(dinosaur)
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaurs(dinosaur)
    park.removeDinosaur(dinosaur)
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 0)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaurs(dinosaur)
    park.addDinosaurs(dinosaur2)
    park.addDinosaurs(dinosaur3)
    park.addDinosaurs(dinosaur4)
    const actual = park.findMostAttractiveDino()
    assert.strictEqual(actual, dinosaur3)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaurs(dinosaur)
    park.addDinosaurs(dinosaur2)
    park.addDinosaurs(dinosaur3)
    park.addDinosaurs(dinosaur4)
    const actual = park.findDinosBySpecies('t-rex')
    assert.deepStrictEqual(actual, [dinosaur, dinosaur3])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaurs(dinosaur)
    park.addDinosaurs(dinosaur2)
    park.addDinosaurs(dinosaur3)
    park.addDinosaurs(dinosaur4)
    const actual = park.calculateVisitorsPerDay()
    assert.strictEqual(actual, 155)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaurs(dinosaur)
    park.addDinosaurs(dinosaur2)
    park.addDinosaurs(dinosaur3)
    park.addDinosaurs(dinosaur4)
    const actual = park.calculateVisitorsPerYear()
    assert.strictEqual(actual, 56575)
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaurs(dinosaur)
    park.addDinosaurs(dinosaur2)
    park.addDinosaurs(dinosaur3)
    park.addDinosaurs(dinosaur4)
    const actual = park.calculateAnualEarnings()
    assert.strictEqual(actual, 1131500)
  });

});
