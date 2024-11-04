import getRandomInRange from "./getRandomInRange.js";

function generateOrderAt() {
  const month = getRandomInRange(1, 12);
  const day = getRandomInRange(1, 28);
  return `2024-${String(month).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )}`;
}

export default generateOrderAt;
