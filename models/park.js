const Park = function(name, ticketPrice){
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
};

Park.prototype.addDinosaurs = function(dinosaur){
    this.dinosaurs.push(dinosaur)
};
Park.prototype.removeDinosaur = function(dinosaur){
    const index = this.dinosaurs.indexOf(dinosaur)
    this.dinosaurs.splice(index, 1)
};
Park.prototype.findMostAttractiveDino = function(){
    visitorsPerDino = []
    var highestValue = 0
    for (dinosaur of this.dinosaurs){
        if (dinosaur.guestsAttractedPerDay >= highestValue) {
            visitorsPerDino.unshift(dinosaur)
            highestValue = dinosaur.guestsAttractedPerDay
        } else {
            visitorsPerDino.push(dinosaur)
        }
    }
    highestAttractionDino = visitorsPerDino[0]
    return highestAttractionDino
};
Park.prototype.findDinosBySpecies = function(species){
    dinos = []
    for (dino of this.dinosaurs){
        if (dino.species == species){
            dinos.push(dino)
        }
    }
    return dinos
};
Park.prototype.calculateVisitorsPerDay = function(){
    let visitorsPerDay = 0
    for (dino of this.dinosaurs){
        visitorsPerDay += dino.guestsAttractedPerDay
    }
    return visitorsPerDay
};
Park.prototype.calculateVisitorsPerYear = function(){
    let visitorsPerYear = 0
    let visitorsPerDay = this.calculateVisitorsPerDay()
    visitorsPerYear = visitorsPerDay * 365
    return visitorsPerYear
};
Park.prototype.calculateAnualEarnings = function(){
    let anualEarnings = 0
    let visitorsPerYear = this.calculateVisitorsPerYear()
    anualEarnings = visitorsPerYear * this.ticketPrice
    return anualEarnings
};


module.exports = Park;