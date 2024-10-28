const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelpia"];

import getRandomInRange from "./getRandomInRange.js";

function generateAddress() {
  const street = getRandomInRange(1, 100);
  const city = cities[Math.floor(Math.random() * cities.length)];
  return `${street} ${city}`;
}

export default generateAddress;
