const fs = require('fs/promises');
const path = require('path');
const colors = require('ansi-colors');

const team = require("./team.json");

/* Find last date */
const lastDate = team[0].lastDate;
// console.log(lastDate)
team[0].lastDate = lastDate;

/* Find next date = every other week = 14 days interval */
let next = new Date(new Date().setDate(new Date(lastDate).getDate() + 14)).toDateString();
// console.log(next)
team[0].nextDate = next;

/* Write last onDuty and last backup to keep track */
let lastOnDuty = team[1].teamHistory[0].name;
let lastBackup = team[1].teamHistory[1].name;
team[0].lastPeople = `Last onDuty: ${lastOnDuty}. Last backup: ${lastBackup}`

/* Find today to know if next is past or future */
let GivenDate = next;
var CurrentDate = new Date();
GivenDate = new Date(GivenDate);

if(GivenDate > CurrentDate){
  console.log(`
  Next duty date will be on ${colors.greenBright(next)}
  On duty is: ${colors.magentaBright(team[1].teamHistory[0].name)}
  Backup is: ${colors.yellow(team[1].teamHistory[1].name)}
`)
  process.exit()
}

/* Get team array to be rotated */
const teamArray = team[1].teamHistory;
// console.log(teamArray)

/* Rotate team array positions */
let rotate = teamArray.push(teamArray.shift());
// console.log(teamArray)

/* Writes the rotated value in the json array */
team[1].teamHistory = teamArray;

/* Check if next position works, or needs to be redone */


/* Find position 0 and write it as onDuty */
let onDuty = team[1].teamHistory[0].name;
// console.log(onDuty)
team[0].onDuty = onDuty;

/* Add 1 point to position 0 */
let addPoint = team[1].teamHistory[0].points + 1;
// console.log(addPoint);
team[1].teamHistory[0].points = addPoint;

/* Save next date in duty-date [] onm position 0 */
team[1].teamHistory[0].dutyDates.push(next);
// let check = team[1].teamHistory[0].dutyDates
// console.log(check);

/* Find position 1 and save it as backup */
let backup = team[1].teamHistory[1].name;
// console.log(backup);
team[0].backup = backup;

/* Print next and backup */
console.log(`
  Next duty date will be on ${colors.greenBright(next)}
  On duty is: ${colors.magentaBright(onDuty)}
  Backup is: ${colors.yellow(backup)}
`);

/* Save changes in team.json file
 * rotated array
 * add duty-date to position 0
 * add points to position 0
 * backup
 */

/* JSON.stringify(Object, format not to be in one line, spaces indentation) */
fs.writeFile(path.join(__dirname, './team.json'), JSON.stringify(team, null, 2),
  function writeJSON(err) {
    if (err) return console.log(err);
  });

module.exports= { sum };
