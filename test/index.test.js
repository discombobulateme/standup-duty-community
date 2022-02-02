const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const fs = require('fs');
const team = JSON.parse(fs.readFileSync('./team.json', { encoding: 'utf-8' }));

describe('Check team', function () {
  it('should return number people in team', function () {
    team[1].should.have.property('teamHistory').with.lengthOf(8);
  });

  it('onduty and index 0 should be the same person', function () {
    const onduty = team[1].teamHistory[0].name;
    const index0 = team[0].onDuty;
    assert.equal(onduty, index0);
  });

  it('onduty should not be the same person as backup', function () {
    const onduty = team[1].teamHistory[0].name;
    const backup = team[1].teamHistory[1].name;
    onduty.should.not.equal(backup);
  });

  it('John should not exist in the team', function () {
    let johnDoe = team[1].teamHistory.find((person) => person.name === 'John Doe');
    should.not.exist(johnDoe);
  });

  it('should not return a null result', function () {
    expect(team).not.to.be.null;
  });
});

/*
 * make sure dates are progressing
 */
