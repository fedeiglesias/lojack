'use strict';

var faker = require('faker');

module.exports.data = (event, context, callback) => {

  const timerGenerator = () => {
    let timer = '';
    timer += faker.random.number({min:0, max:99}).toString().padStart(2,'0');
    timer += ':' + faker.random.number({min:1, max:59}).toString().padStart(2,'0');
    timer += ':' + faker.random.number({min:1, max:59}).toString().padStart(2,'0');
    return timer;
  }

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
        id: faker.random.number({min:1, max:9999}),
        plate: faker.helpers.replaceSymbols('#### ???'),
        vehicle: 'Truck #' + faker.random.number({min:1, max:999}),
        trip: faker.random.number({min:1, max:999}),
        datePosition: faker.date.recent(),
        speed: faker.random.number({min:0, max:180}),
        maxSpeed: faker.random.number({min:50, max:180}),
        rpm: faker.random.number({min:500, max:4000}),
        engineTemperature: faker.random.number({min:60, max:120}),
        oilPressure: faker.random.number({min:0, max:100}),
        kmTrip: faker.random.number({min:0, max:10000}),
        kmTotal: faker.random.number({min:10000, max:100000}),
        fuel: faker.random.number({min:0, max:100}),
        tripConsumption: faker.random.number({min:1, max:999}),
        totalConsumption: faker.random.number({min:1, max:999}),
        throttle: faker.random.number({min:0, max:100}),
        stops: faker.random.number({min:0, max:500}),
        driver: faker.name.findName(),
        turbo: faker.random.number({min:0, max:100}),
        latitude: -35.0000,
        longitude: -60.0000,
        street: faker.address.streetAddress("##"),
        course: faker.random.arrayElement(['N','NE','E','SE','S','SW','W','NW','N']),
        stoppedTime: timerGenerator(),
        runningTime: timerGenerator(),
        cruisingSpeed: faker.random.number({min:0, max:180}),
        lights: faker.random.boolean()
    }),
  };

  callback(null, response);

};