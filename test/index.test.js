const expect = require('chai').expect;

const fs = require('fs');
const team = JSON.parse(fs.readFileSync('./team.json', { encoding: 'utf-8' }));

describe('Check team', function () {
  it('should return number people in team', function () {
    expect(team[1].teamHistory).to.have.length(8);
  });

  it('onduty and index 0 should be the same person', function () {
    const onduty = team[1].teamHistory[0].name;
    const index0 = team[0].onDuty;
    expect(onduty).to.equal(index0);
  });

  it('onduty should not be the same person as backup', function () {
    const onduty = team[1].teamHistory[0].name;
    const backup = team[1].teamHistory[1].name;
    expect(onduty).not.to.equal(backup);
  });

  it('John should not exist in the team', function () {
    let johnDoe = team[1].teamHistory.find((person) => person.name === 'John Doe');
    expect(johnDoe).not.to.exist;
  });

  it('should not return a null result', function () {
    expect(team).not.to.be.null;
  });
});

/*
 * make sure dates are progressing
 */
