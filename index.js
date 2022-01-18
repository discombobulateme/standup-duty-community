const team = require('./team.json');

/* get rotation array */
const getRotation = team[0].onDuty;
// console.log(getRotation);

/* Rotate positions */
let rotated = getRotation.push(getRotation.shift());
console.log(rotated)

/* Find last date */
// const lastDate = 'Wed Jan 19 2022';
const lastDate = team[0].onDuty.lastDate;
//console.log(lastDate);

/* Find next date = 15 days interval */
let next = new Date(new Date().setDate(new Date(lastDate).getDate() + 14)).toDateString();
//console.log(next)

/* Check if next position works, or needs to be redone */

/* If position 0, points + 1 */
/* If position 0, save next date in duty-date [] */

/* If position 1, backup */

/* Print next and backup */

/* Save changes in team.json file
 * rotated array
 * positions
 * add duty-date to position 0
 * add points to position
 */
