import getRandomInRange from "./getRandomInRange.js";
import { cafeBrand, JijumName } from "./constants.js";
import getRandomInRange from "./getRandomInRange.js";

function generateName() {
  const cafe = cafeBrand[Math.floor(Math.random() * cafeBrand.length)];
  const region = JijumName[Math.floor(Math.random() * JijumName.length)];
  const HoNum = getRandomInRange(1, 10);

  return `${cafe} ${region} ${HoNum}호점`;
}

export default generateName;
