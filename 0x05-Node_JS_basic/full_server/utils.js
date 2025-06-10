import fs from 'fs';

export function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length < 2) {
        resolve({});
        return;
      }
      const students = lines.slice(1)
        .map((line) => line.split(','))
        .filter((fields) => fields.length === 4);
      const fields = {};
      for (const student of students) {
        const [firstname, , , field] = student;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
      resolve(fields);
    });
  });
}
