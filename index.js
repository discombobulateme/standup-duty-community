const fs = require('fs/promises');
const path = require('path');
const colors = require('ansi-colors');

const team = require('./team.json');

/* Checker to void rotation before due date */
let currentDate = new Date();
let oldNext = team[0].nextDate;
let next = new Date(team[0].nextDate);

//console.log(currentDate <= next ? true : false );
if (currentDate <= next) {
  console.log(`
  Next duty date will be on ${colors.greenBright(oldNext)}
  On duty is: ${colors.magentaBright(team[1].teamHistory[0].name)}
  Backup is: ${colors.yellow(team[1].teamHistory[1].name)}
  `);
  process.exit();
}

/* Find next date = every other week = 14 days interval */
let lastDate = team[0].nextDate;
let last = new Date(lastDate);
let nextDate = new Date(last.setDate(last.getDate() + 14));
let nextReadableDate = nextDate.toDateString();

/* UPDATING JSON */
/* Update last and next dates */
team[0].nextDate = nextReadableDate;
team[0].lastDate = oldNext;
/* Write last onDuty and last backup to keep track */
let lastOnDuty = team[1].teamHistory[0].name;
let lastBackup = team[1].teamHistory[1].name;
team[0].lastPeople = `Last onDuty: ${lastOnDuty}. Last backup: ${lastBackup}`;
/* Rotate team array positions */
const teamArray = team[1].teamHistory;
const rotate = teamArray.push(teamArray.shift());
team[1].teamHistory = teamArray;

/* Check if next position works, or needs to be redone */

/* ONDUTY & BACKUP PERSON UPDATE */
/* Find position 0 and write it as onDuty */
let onDuty = team[1].teamHistory[0].name;
team[0].onDuty = onDuty;
/* Add 1 point to position 0 */
let addPoint = team[1].teamHistory[0].points + 1;
team[1].teamHistory[0].points = addPoint;
/* Save next date in duty-date [] IN position 0 */
team[1].teamHistory[0].dutyDates.push(nextReadableDate);
/* Find position 1 and save it as backup */
let backup = team[1].teamHistory[1].name;
team[0].backup = backup;

/* Print notification message */
console.log(`
  Next duty date will be on ${colors.greenBright(nextReadableDate)}
  On duty is: ${colors.magentaBright(onDuty)}
  Backup is: ${colors.yellow(backup)}
`);

/* Save changes in team.json file checklist:
 * rotated array
 * add duty-date to position 0
 * add points to position 0
 * backup
 */

/* JSON.stringify(Object, format not to be in one line, spaces indentation) */
fs.writeFile(path.join(__dirname, './team.json'), JSON.stringify(team, null, 2), function writeJSON(err) {
  if (err) return console.log(err);
});

module.exports = {
  slack: {
    signinSecret: process.env.SLACK_SIGNIN_SECRET,
    token: process.env.SLACK_TOKEN,
  },
};
