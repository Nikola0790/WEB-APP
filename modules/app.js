'use strict';

const Airport = require('./entities/airport');
const controller = require('./controller/controller');


function createFly () {
    
    var airport = new Airport ();

    var flight_1 = controller.createFlight ('Belgrade-New York', 'Oct 25 2017');
    var flight_2 = controller.createFlight ('Barcelona-Belgrade', 'Nov 17 2017');
    var flight_3 = controller.createFlight ('Belgrade-Paris', 'Oct 26 2017');

    var person_1 = controller.createPassenger ('Nikola', 'Drcalic', 47, 'e');
    var person_2 = controller.createPassenger ('Milan', 'Pavlovic', 9, 'b');
    var person_3 = controller.createPassenger ('Denerys', 'Targeryan', 65);
    var person_4 = controller.createPassenger ('John', 'Snow');
    var person_5 = controller.createPassenger ('John', 'Jones', 79, 'b');
    var person_6 = controller.createPassenger ('Alan', 'Johnson', 37, 'e');

    flight_1.addPassenger(person_1);
    flight_1.addPassenger(person_2);

    flight_2.addPassenger(person_3);
    flight_2.addPassenger(person_4);
    flight_2.addPassenger(person_5);

    flight_3.addPassenger(person_6);

    airport.addFlight(flight_1);
    airport.addFlight(flight_2);
    airport.addFlight(flight_3);
    
    return(airport.getData());
}

console.log(createFly());