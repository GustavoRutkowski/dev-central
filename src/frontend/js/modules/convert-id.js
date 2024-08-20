// Convert: #0001 to 1
const stringToId = (strId) => parseInt(strId.slice(1));

// Convert: 1 to #0001
const idToString = (id) => "#" + id.toString().padStart(4, "0");

export { stringToId, idToString };
