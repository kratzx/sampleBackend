import { nodeServer } from "./server/index.js";
import fileSystem from "./database/filesystem.js";

const text = fileSystem.read();

const config = {
  defaultMessage: text,
}
const myServer = new nodeServer(config);
myServer.run();