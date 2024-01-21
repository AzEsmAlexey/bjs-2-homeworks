function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);

}

function getUsersNamesInAgeRange(users, gender) {
  const filteredUsers = users.filter(user => user.gender === gender);
  if (filteredUsers.length === 0) {
    return 0;
  }
  const ages = filteredUsers.map(user => user.age);
  const sum = ages.reduce((acc, age) => acc + age, 0);
  const averageAge = sum / ages.length;
  return averageAge;

}