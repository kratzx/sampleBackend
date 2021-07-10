/*
import { nodeServer } from "./server/index.js";
import fileSystem from "./database/filesystem.js";

const text = fileSystem.read();

const config = {
  defaultMessage: text,
}
const myServer = new nodeServer(config);
*/

import { ExpressServer } from "./server/index.js";

const myServer = new ExpressServer();
myServer.run();