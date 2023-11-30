// 100-await.js
import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    // Call the async functions using await
    const photo = await uploadPhoto();
    const user = await createUser();

    // Return an object with the results
    return {
      photo,
      user,
    };
  } catch (error) {
    // If an error occurs, return an object with null values
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;

