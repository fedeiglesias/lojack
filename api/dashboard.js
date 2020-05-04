'use strict';

module.exports.data = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
        id: 7,
        plate: 'ABC123',
        vehicle: 'Truck #1',
        trip: '123',
        datePosition: '12/10/2009 23:45:51',
        speed: 20,
        maxSpeed: 180,
        rpm: 1500,
        engineTemperature: 90,
        oilPressure: 7,
        kmTrip: 1226,
        kmTotal: 123456,
        fuel: 90,
        tripConsumption: 350,
        totalConsumption: 250,
        throttle: 50,
        stops: 150,
        driver: 'Joen Doe',
        turbo: 50,
        latitude: -35.0000,
        longitude: -60.0000,
        street: '55 street',
        course: 'NO',
        stoppedTime: '000:00:00',
        runningTime: '000:00:00',
        cruisingSpeed: 55,
        lights: 0
    }),
  };

  callback(null, response);

};