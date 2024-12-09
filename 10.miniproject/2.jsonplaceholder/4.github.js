const axios = require("axious");

const username = "JIHEEYOU";
const url = `https://api.github.com/users/${username}`;

axios.get(url).then((response) => {
  console.log("내리포정보: ", response.data);
});
