const SortOrder = {
  Asc: -1,
  Desc: 1,
};

let form = {
  firstName: [
    "Ilia",
    "Alice",
    "Matthew",
    "Elizabeth",
    "Peter",
    "Kathrine",
    "Robert",
    "Sophie",
    "George",
    "Emily",
  ],
  surName: [
    "Holenkov",
    "Eve",
    "King",
    "Queen",
    "Gabriel",
    "Heigl",
    "Redford",
    "Bextor",
    "Duke",
    "Blunt",
  ],
  middleName: [
    "Yaroslav",
    "Charles",
    "Andrei",
    "Michael",
    "Gustav",
    "Antonio",
    "Steve",
    "Robin",
    "Jamie",
    "Oliver",
  ],
  age: [50, 31, 21, 86, 63, 25, 15, 40, 23, 33],
  ages() {
    const today = new Date();
    return today.getFullYear() - this.birthDate.getFullYear();
  },
};

const showPerson = (i) => {
  console.log(
    `The person you are interested in is ${form.firstName[i]} ${form.surName[i]} ${form.middleName[i]}, ${form.age[i]} age of old`
  );
};

// showPerson(i);

const getPerson = (i) => ({
  firstName: form.firstName[i],
  secondName: form.surName[i],
  middleName: form.middleName[i],
  age: form.age[i],
});

const getPeople = () => {
  const gp = [];
  for (let i = 0; i < 10; i += 1) {
    gp.push(getPerson(i));
  }
  return gp;
};

const comparePerson = (a, b) => {
  if (a.firstName === b.firstName) {
    if (a.middleName === b.middleName) {
      return a.lastName <= b.lastName ? -1 : 1;
    }

    return a.middleName < b.middleName ? -1 : 1;
  }
  return a.firstName < b.firstName ? -1 : 1;
};

const sortArray = (a, compare, direction = 1) => {
  for (let i = 0; i < a.length - 1; i += 1) {
    for (let j = 0; j < a.length - 1; j += 1) {
      if (compare(a[j], a[j + 1]) === direction) {
        const t = a[j];
        a[j] = a[j + 1];
        a[j + 1] = t;
      }
    }
  }
};

const people = getPeople();

sortArray(people, comparePerson);

console.log(people);

// сравнить по возрасту

const comparePersonAge = (a, b) => {
  if (a.age === b.age) {
    return a.age < b.age ? -1 : 1;
  }
};

const sortArrayAge = (a, compare, direction = SortOrder.Asc) => {
  for (let i = 0; i < a.length - 1; i += 1) {
    for (let j = 0; j < a.length - 1; j += 1) {
      if (compare(a[j], a[j + 1]) === direction) {
        const t = a[j];
        a[j] = a[j + 1];
        a[j + 1] = t;
      }
    }
  }
};

const peopleAge = getPeople();

sortArrayAge(peopleAge, comparePersonAge);

console.log(peopleAge);

// вывести самый молодой возраст, самый старый и средний возраст

const getPeopleAge = () => {
  let sum = 0;
  let min = form.age[0];
  let max = form.age[0];
  for (let i = 0; i < 10; i += 1) {
    min = form.age[i] < min ? form.age[i] : min;
    max = form.age[i] > max ? form.age[i] : max;
    sum += form.age[i];
    mid = sum / 10;
  }
  return {
    minAge: min,
    maxAge: max,
    midAge: mid,
  };
};

const gpa = getPeopleAge();

console.log(gpa);

const v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getEdgeValue = (a, compare, direction = SortOrder.Asc) => {
  let max = a[0];
  for (let i = 0; i < a.length; i += 1) {
    if (compare(max, a[i]) === direction) {
      max = a[i];
    }
  }
  return max;
};

const compPeople = (p1, p2) => {
  const a = p1.age;
  const b = p2.age;

  if (a === b) return 0;
  if (a < b) return 1;
  if (a > b) return -1;
};

const val = getEdgeValue(people, compPeople, SortOrder.Asc);

console.log(val);
