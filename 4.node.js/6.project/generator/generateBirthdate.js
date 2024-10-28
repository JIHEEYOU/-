import getRandomInRange from "./getRandomInRange.js";

function generateBirthdate() {
  const year = getRandomInRange(1960, 2010);
  const month = getRandomInRange(1, 12);
  const day = getRandomInRange(1, 28);
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )}`;
}

export default generateBirthdate;
