require("dotenv").config();

const passward = process.env.USER_PASSWORD;
const secret = process.env.USER_SECRET;

console.log(passward);
console.log(secret);
