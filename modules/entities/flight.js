'use strict';
const Passenger = require('./passenger')


function Flight (relation, date) {

    if (!relation || !date) {
        throw new Error ('Fields are required')
    }

    this.relation = relation
    this.date = new Date (date)
    this.listOfPassengers = []
    this.addPassenger = function (passenger) {
        if (!passenger || !(passenger instanceof Passenger)) {
            throw new Error ('Invalid passenger input');
        }
        this.listOfPassengers.push(passenger);        
    }
    this.getData = function () {
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        var result = day + '.' + month + '.' + year + ', ' + this.relation + '\n'; 
        this.listOfPassengers.forEach(function(element) {
            result += '\t\t' + element.getData() + '\n';
        })
        return result;
    }
}

module.exports = Flight;