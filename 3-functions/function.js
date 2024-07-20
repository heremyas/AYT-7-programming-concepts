function calculateAverage(grades) {
  let sum = 0;
  for (let grade of grades) {
    sum += grade;
  }

  return sum / grades.length;
}

const grades = [3, 2.1, 1.6, 2.9, 2];
const average = calculateAverage(grades);

console.log(average);
