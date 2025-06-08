const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const getAge = function (birth, death) {
  if (death === undefined) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

function findTheOldest(peopleArray) {
  return peopleArray.reduce((oldestPersonSoFar, currentPerson) => {
    // get the age of the current oldest person
    const oldestAge = getAge(
      oldestPersonSoFar.yearOfBirth,
      oldestPersonSoFar.yearOfDeath
    );

    // get the age of the person we're currently looking at
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );

    // if the current person is older that the oldest so far, return them
    if (currentAge > oldestAge) {
      return currentPerson;
    } else {
      return oldestPersonSoFar;
    }
  });
}
// const findTheOldest = function (people) {
//   return people.reduce((oldest, currentPerson) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const currentAge = getAge(
//       currentPerson.yearOfBirth,
//       currentPerson.yearOfDeath
//     );
//     return oldestAge < currentAge ? currentPerson : oldest;
//   });
// };

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
