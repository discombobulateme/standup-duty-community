# standup-duty

A tool that automatically rotates a team and informs through a message sent to Slack who is on duty.

Which team member is chosen for duty is based on a weighed system. The longer the person hasn't been on standup duty or backup standup duty, the higher their score gets.

The tool also automatically considers out of office events fom the BambooHR "Who's out" calendar, which is why a small custom setup is required (more on that in the setup section).

Tool runs automatically every twoo weeks (time is configurable) using GitHub Actions, it returns a message posted in the team's Slack channel.

## Setup & Bamboo integration

Bamboo Integration is inspired by [Live testing Team tool](https://gitlab.prod.sjc3.saucelabs.net/live/standup-duty).

1) Clone this repository to your local machine.
2) For best results run `nvm use` in the main directory.
3) Run `npm install` to install all dependencies.
4) To make the calendar event fetching work, you need to create a file in the main directory called `config-local.js`. This file may contain private data, so it is already added to `.gitignore`.
Paste the following code into the file:

```js
const BAMBOOHR_OUT_OF_OFFICE_CALENDAR_URL = 'REPLACE THIS WITH THE WHO\'S OUT CALENDAR FEED URL';

export default {
  BAMBOOHR_OUT_OF_OFFICE_CALENDAR_URL,
};

```
5. Replace the placeholder value with the bambooHR calendar feed URL for the "Who's out" calendar. (You can find this URL in bambooHR or might even have it already in your Google calendar.)

That should be all you need to do to prepare the tool.

## Running locally

For the general usage, you just need to run `npm start`. This will lead the main script to calculate which team members are on duty next.

## Team changes

When a team member leaves the team or a new member joins, the `team.json` file needs to be updated accordingly.
