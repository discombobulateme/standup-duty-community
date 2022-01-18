/* Sum all object values */
function paul(arr) {
  const dic = { kata: 5, 'Petes kata': 10, life: 0, eating: 1 };
  const num = arr.reduce((a, i) => +a + dic[i], 0);
  return num < 40 ? 'Super happy!' : num < 70 ? 'Happy!' : num < 100 ? 'Sad!' : 'Miserable!';
}

/* Create array with team member name */
let people = team.map((person) => person.name);
// console.log("PEOPLE: ", people)

/* Rotate array */
const rotatedArr = people.slice(1).concat(people.slice(0, 1));
// console.log("ROTATED: ", rotatedArr);

/*transforms Date() into shorter string*/
const formatedDate = new Date().toISOString().substring(0, 13)

/* Writes and overwrites a JSON file and save it into frontend/public folder */
const createJsonDashboardFile = async function (output) {
  const directory = path.resolve(__dirname, '..', 'frontend', 'public')

  await fs.promises.writeFile(path.resolve(directory, 'frontend.json'), JSON.stringify(output))
}
