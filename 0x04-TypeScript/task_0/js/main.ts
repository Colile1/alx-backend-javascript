interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Collle',
  lastName: 'Sibanda',
  age: 20,
  location: 'Pretoria',
};

const student2: Student = {
  firstName: 'Name2',
  lastName: 'Surname2',
  age: 22,
  location: 'Johannesburg',
};

const studentsList: Student[] = [student1, student2];

function renderStudentsTable(students: Student[]): void {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  students.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

renderStudentsTable(studentsList);
