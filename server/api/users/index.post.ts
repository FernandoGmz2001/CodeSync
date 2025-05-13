import { z } from 'zod'; // Import Zod for error handling
import { UserCreateSchema } from './dtos';

export default defineEventHandler(async (event) => {
  try {
    // 1. Read the request body
    const body = await readBody(event);

    // 2. Validate the body using the Zod schema
    // .parse() will throw an error if validation fails
    const validatedBody = UserCreateSchema.parse(body);

    // 3. Create the new user document in the database
    const newUser = await UserSchema.create(validatedBody);

    // 4. Return the newly created user document
    // You might want to return a UserResponseDTO here instead of the raw Mongoose doc
    return newUser;

  } catch (error) {
    // 5. Handle errors
    if (error instanceof z.ZodError) {
      // Handle Zod validation errors
      throw  createError({
        statusCode: 400, // Bad Request
        statusMessage: 'Validation failed',
        data: error.issues, // Provide Zod validation issues
      });
    } else if (error && typeof error === 'object' && 'code' in error && error.code === 11000) {
      // Handle Mongoose duplicate key error (e.g., unique username or clerkUserId)
      throw createError({
        status: 409, // Conflict
        statusText: 'User already exists',
      });
    } else {
      // Handle other potential errors (database errors, etc.)
      console.error('Error creating user:', error); // Log the error on the server side
      throw  createError({
        statusCode: 500, // Internal Server Error
        statusMessage: 'Failed to create user',
      });
    }
  }
});
