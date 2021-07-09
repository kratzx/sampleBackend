import fs from 'fs';

const defaultDir = './database/textfiles/sampleText.txt';

const fileSystem = {
  read: (fileDirectory = defaultDir) => {
    return fs.readFileSync(fileDirectory).toString();
  }
}

export default fileSystem;