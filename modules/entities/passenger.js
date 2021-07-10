'use strict';
const Seat = require('./seat');
const Person = require('./person');


function Passenger (person, seat) {

    if (!person || !(person instanceof Person)) {
        throw new Error ('Invalid person input');
    }
    if (!seat || !(seat instanceof Seat)) {
        throw new Error ('Invalid seat input');
    }
    this.person = person
    this.seat = seat
    this.getData = function () {
        return this.seat.getData().toUpperCase() + ', ' + this.person.getData(); 
    }
}

module.exports = Passenger;