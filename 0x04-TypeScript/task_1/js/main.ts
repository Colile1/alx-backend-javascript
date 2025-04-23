export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export const director1: Directors = {
  firstName: 'Collle',
  lastName: 'Sibanda',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}

export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

export class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

export const teacher3: Teacher = {
  firstName: 'Collle',
  lastName: 'Sibanda',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);
console.log(director1);
console.log(printTeacher('Collle', 'Sibanda'));
