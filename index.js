const team = require('./team.json');

/* get rotation array */
const getRotation = team[1].teamHistory;

/* Rotate positions */
//let rotated = getRotation.push(getRotation.shift());

/* Find last date */
const lastDate = team[0].lastDate;

/* Find next date = every other week = 14 days interval */
let next = new Date(new Date().setDate(new Date(lastDate).getDate() + 14)).toDateString();

/* Check if next position works, or needs to be redone */

/* Find position 0 and add 1 point */
let addPoint = team[1].teamHistory[0].points + 1;
team[1].teamHistory[0].points = addPoint;
// let check = team[1].teamHistory[0]
// console.log(check);

/* Find position 0 and save next date in duty-date [] */
let addNextDate = team[1].teamHistory[0].dutyDates;
team[1].teamHistory[0].dutyDates.push(next);
// let check = team[1].teamHistory[0].dutyDates
// console.log(check);

/* Find position 1 and save it as backup */
let addBackup = team[1].teamHistory[1].name;
team[0].backup = addBackup;
// let check = team[0].backup
// console.log(check);

/* Print next and backup */


/* Save changes in team.json file
 * rotated array
 * positions
 * add duty-date to position 0
 * add points to position
 */
