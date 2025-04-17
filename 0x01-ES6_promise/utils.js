export function uploadPhoto(filename) {
    return Promise.resolve(`${filename} uploaded successfully`);
}

export function createUser(firstName, lastName) {
    return Promise.resolve({
        firstName,
        lastName,
    });
}
