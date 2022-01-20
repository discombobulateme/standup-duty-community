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

let team2 = [...team]
let rotated = team2.push(team2.shift());
team = team2

console.log(team)
