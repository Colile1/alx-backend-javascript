const asyncUploadUser = require('./100-await').default;
const { createUser } = require('./4-user-promise');
const uploadPhoto = require('./5-photo-reject').default;

jest.mock('./4-user-promise');
jest.mock('./5-photo-reject');

describe('asyncUploadUser', () => {
    it('should upload photo and create user successfully', async () => {
        uploadPhoto.mockResolvedValue('profile.jpg uploaded successfully');
        createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

        const result = await asyncUploadUser();

        expect(result).toEqual({
            photo: 'profile.jpg uploaded successfully',
            user: { firstName: 'Guillaume', lastName: 'Salva' },
        });
    });

    it('should return null values on error', async () => {
        uploadPhoto.mockRejectedValue(new Error('Error uploading photo'));
        createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

        const result = await asyncUploadUser();

        expect(result).toEqual({ photo: null, user: null });
    });
});
