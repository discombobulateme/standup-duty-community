const fs = require('fs/promises');
const ical = ('node-ical');

const config = ('./config-local.js');

const file = require('./team.json');

// Load array of people in the standup rotation
let team = file[1].teamHistory.map(i => i.name);
//console.log(team);

// Load all out of office events of company employees
let timeOffCalendarResponse = async() => await fetch(config.BAMBOOHR_OUT_OF_OFFICE_CALENDAR_URL);
const timeOffCalendarResponseBody = async () => await timeOffCalendarResponse.text();
const outOfOfficeEvents = ical.sync.parseICS(timeOffCalendarResponseBody);

// Enrich people data with out of office events
for (const person of team) {
  person.timeOff = Object.values(outOfOfficeEvents).filter((event) => event.summary.includes(person.name));
}

// Helper function that returns if an out of office event is during standup duty
function isEventDuringStandupDuty(event, dutyStartDate, dutyEndDate) {
  const eventStartDate = event.start.toISOString().substring(0, 10);
  const eventEndDate = event.end.toISOString().substring(0, 10);

  // Check if the event start date is after the duty end date => no collision
  if (new Date(eventStartDate) > new Date(dutyEndDate)) return false;

  // Check if the event end date is before the duty start date => no collision
  if (new Date(eventEndDate) < new Date(dutyStartDate)) return false;

  return true;
}
