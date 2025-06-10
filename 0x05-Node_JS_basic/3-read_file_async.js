const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        if (lines.length < 2) {
          console.log('Number of students: 0');
          resolve();
          return;
        }
        const students = lines.slice(1).map((line) => line.split(',')).filter((fields) => fields.length === 4);
        const fields = {};
        for (const student of students) {
          const [firstname, , , field] = student;
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
        console.log(`Number of students: ${students.length}`);
        for (const [field, names] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
        resolve();
      } catch (e) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
