export default function signUpUser(firstName, lastName) {
    return Promise.resolve({
        firstName: firstName,
        lastName: lastName,
    });
}

export function createUser(firstName, lastName) {
    return Promise.resolve({
        firstName,
        lastName,
    });
}
