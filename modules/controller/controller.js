'use strict';
const Flight = require('../entities/flight');
const Passenger = require('../entities/passenger');
const Person = require('../entities/person');
const Seat = require('../entities/seat');


function createFlight (relation, date) {
    return new Flight (relation, date)
}

function createPassenger (firstName, lastName, seatNumber, category) {
    var person = new Person (firstName, lastName);
    var seat = new Seat (seatNumber, category);

    return new Passenger (person, seat);
}

module.exports = {createFlight, createPassenger};