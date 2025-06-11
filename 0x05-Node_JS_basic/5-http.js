const http = require('http');
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
          resolve('Number of students: 0');
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
        let output = `Number of students: ${students.length}`;
        for (const [field, names] of Object.entries(fields)) {
          output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
        }
        resolve(output);
      } catch (e) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    let response = 'This is the list of our students\n';
    countStudents(database)
      .then((data) => {
        response += data;
        res.end(response);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end('This is the list of our students\n' + err.message);
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

app.listen(1245);

module.exports = app;
