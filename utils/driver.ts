import { Browser, remote, RemoteOptions } from "webdriverio";

const chromeConfig = {
  connectionRetryTimeout: 120000,
  hostname: "localhost",
  port: 9515,
  waitforTimeout: 30000,
  services: [["chromedriver"]],
  automationProtocol: "webdriver",
  capabilities: {
    browserName: "chrome",
    acceptInsecureCerts: true,
    "goog:chromeOptions": {
      args: ["--use-fake-device-for-media-stream", "--use-fake-ui-for-media-stream"],
    },
  },
};

export const Driver = {
  async getDriver(): Promise<Browser<"async">> {
    const driver = await remote(chromeConfig as RemoteOptions);
    return driver;
  },
};
