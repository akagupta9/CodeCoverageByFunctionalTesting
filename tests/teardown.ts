import { stop } from "chromedriver";

module.exports = async () => {
  await stop();
  console.log("--------------- Chrome Driver stopped ---------------");
};
