import fs from 'fs';

const rawdata = fs.readFileSync('./samplefiles/sampleJson.json');
const parsedData = JSON.parse(rawdata);

export const getAllItems = () => parsedData.items;
export const getFeaturedItems = () => parsedData.items.slice(0, 4);
export const getOneItem = (id) => parsedData.items[id];