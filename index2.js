let team = [
  {
    name: 'James Tacker',
    slack: '@James Tacker',
    points: 0,
  },
  {
    name: 'Kim Pohas',
    slack: '@Kim Pohas',
    points: 0,
  },
  {
    name: 'Laura Thomas',
    slack: '@Laura Thomas',
    points: 0,
  },
  {
    name: 'Lysanne Pinto',
    slack: '@Lysanne Pinto',
    points: 0,
  },
  {
    name: 'Meredith Volk',
    slack: '@Meredith Volk',
    points: 0,
  },
  {
    name: 'Nancy Sweeney',
    slack: '@Nancy Sweeney',
    points: 0,
  },
  {
    name: 'Paloma Oliveira',
    slack: '@Paloma Oliveira',
    points: 0,
  },
  {
    name: 'Rachel Andre',
    slack: '@Rachel Andre',
    points: 0,
  },
];

/* Create array with persons name */
let people = team.map((person) => person.name);
// console.log("PEOPLE: ", people)

/* Rotate array */
const rotatedArr = people.slice(1).concat(people.slice(0, 1));
// console.log("ROTATED: ", rotatedArr);

// console.log(rotateArray());

// print next and backup

// add points to next

// rotate

// check if the next ui available, if not, send it to 3rd place
