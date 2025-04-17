import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
    return Promise.all([uploadPhoto('profile.jpg'), createUser('Guillaume', 'Salva')])
        .then((responses) => {
            const [photoResponse, userResponse] = responses;
            console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
        })
        .catch((error) => {
            console.log(`Signup system offline: ${error.message}`);
        });
}
