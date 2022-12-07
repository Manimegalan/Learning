const fs = require("fs");
const { parse } = require("csv-parse");

exports.parseCSV = async ({ file }) => {
  return new Promise((resolve, reject) => {
    let records = [];
    const parser = parse({ columns: true });

    parser.on("readable", () => {
      let record;
      while ((record = parser.read()) !== null) {
        records.push(record);
      }
    });

    parser.on("end", () => {
      resolve(records);
      fs.unlinkSync(file.path);
    });

    parser.on("error", (err) => reject(err.message));

    fs.createReadStream(file.path).pipe(parser);
  });
};
