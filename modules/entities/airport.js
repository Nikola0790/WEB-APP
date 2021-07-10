'use strict';

const Flight = require('./flight')

function Airport () {

    this.name = 'Nikola Tesla'
    this.listOfFlights = []
    this.addFlight = function (flight) {
        if (!flight || !(flight instanceof Flight)) {
            throw new Error ('Invalid flight input')
        }
        this.listOfFlights.push(flight);
    }
    this.passengerNumber = function () {
        var count = 0;
        this.listOfFlights.forEach (function (flight) {
            count += flight.listOfPassengers.length;
        })
        return count;
    }
    this.getData = function () {
        var result;
        result =  'Airport: ' + this.name + ', total passengers: ' + this.passengerNumber() + '\n';
        this.listOfFlights.forEach(function(pass) {
            result += '\t' + pass.getData();
        });
        return result;
    }

}

module.exports = Airport;