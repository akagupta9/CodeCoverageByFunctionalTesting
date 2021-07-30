import { start } from "chromedriver";

module.exports = async () => {
  await start();
  console.log("_________ Chrome Driver Started_________________");
};
