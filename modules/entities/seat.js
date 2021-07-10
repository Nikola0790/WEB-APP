'use strict';

function Seat (number, category) {

    if (!category) {
        category = 'e';
    }
    if (!number) {
        number = Math.floor(91 * Math.random() + 10);
    }
    if (category !== 'b' && category !== 'e') {
        throw new Error ('Category must be *b* or *e*');
    }
    this.number = number
    this.category = category
    this.getData = function () {
        return this.number + ', ' + this.category;
    }
}

module.exports = Seat;