import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
    try {
        const photo = await uploadPhoto('profile.jpg');
        const user = await createUser('Guillaume', 'Salva');
        return { photo, user };
    } catch {
        return { photo: null, user: null };
    }
}
