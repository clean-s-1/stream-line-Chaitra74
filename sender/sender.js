const sensorReadings = require('./sensorValues');

function getSenderReadings() {
  console.log(sensorReadings);
}

getSenderReadings();
module.exports = { getSenderReadings };
