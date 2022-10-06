const { expect } = require('chai');

const sensorValues = require('./../sender/sensorValues');
const senderFetchReadings = require('./../sender/sender');

describe('Sensor readings random generator', () => {
  let readings = [];
  readings.push(sensorValues.fetchReadings);

  it('sensor value should be present', () => {
    expect(readings).to.exist;
  });
});

describe('Sender data should be made available', () => {
  it('sensor temperature values should be returned', () => {
    expect(sensorValues.senderTemperatureReadings).to.exist;
  });

  it('sensor SOC values should be returned', () => {
    expect(sensorValues.senderSOCReadings).to.exist;
  });

  it('sender data should be present', () => {
    expect(senderFetchReadings.getSenderReadings).to.exist;
  });
});
