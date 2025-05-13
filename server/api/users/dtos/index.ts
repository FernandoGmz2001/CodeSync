import { z } from 'zod';

/**
 * Zod schema for User data returned in responses.
 * This typically includes all fields that are safe to expose.
 */
export const UserResponseSchema = z.object({
  clerkUserId: z.string().describe('The unique ID from Clerk for the user.'),
  username: z.string().describe('The user\'s chosen username.'),
  profilePictureUrl: z.string().optional().describe('URL of the user\'s profile picture. Optional.'),
  bio: z.string().optional().describe('User\'s biography or description. Optional.'),
  expertise: z.array(z.string()).default([]).describe('Array of strings representing the user\'s areas of expertise.'),
  reputationPoints: z.number().describe('Points representing the user\'s reputation.'),
  bookmarkedPostIds: z.array(z.string()).describe('Array of Post IDs bookmarked by the user.'),
  // Represented as an object with string keys and number values
  postsActivity: z.record(z.string(), z.number()).describe('Map to store activity related to posts (e.g., upvotes, downvotes).'),
  // Represented as an object with string keys and number values
  solutionsActivity: z.record(z.string(), z.number()).describe('Map to store activity related to solutions.'),
  createdAt: z.date().describe('Timestamp when the user document was created.'),
  updatedAt: z.date().describe('Timestamp when the user document was last updated.'),
});

/**
 * TypeScript interface for the User Response DTO, inferred from the Zod schema.
 */
export type UserResponseDTO = z.infer<typeof UserResponseSchema>;

/**
 * Zod schema for creating a new User.
 * Includes only the fields necessary for initial creation.
 */
export const UserCreateSchema = z.object({
  clerkUserId: z.string().describe('The unique ID from Clerk for the user (provided by Clerk webhook/frontend).'),
  username: z.string().min(3).max(50).describe('The user\'s chosen username. Required and unique.'), // Added basic validation example
  profilePictureUrl: z.string().url().optional().describe('URL of the user\'s profile picture. Optional.'), // Added URL validation example
  bio: z.string().max(500).optional().describe('User\'s biography or description. Optional.'), // Added max length example
  // Fields like reputationPoints, timestamps, bookmarkedPostIds, activity maps
  // are typically managed by the system and not included in the creation DTO.
});

/**
 * TypeScript interface for the User Creation DTO, inferred from the Zod schema.
 */
export type UserCreateDTO = z.infer<typeof UserCreateSchema>;

/**
 * Zod schema for updating an existing User.
 * Includes fields that a user is allowed to modify. All fields are optional
 * as a user might only update a subset of information.
 */
export const UserUpdateSchema = z.object({
  username: z.string().min(3).max(50).optional().describe('The user\'s chosen username.'),
  profilePictureUrl: z.string().url().optional().describe('URL of the user\'s profile picture.'),
  bio: z.string().max(500).optional().describe('User\'s biography or description.'),
  expertise: z.array(z.string()).optional().describe('Array of strings representing the user\'s areas of expertise.'),
  // Fields like clerkUserId, reputationPoints, timestamps, bookmarkedPostIds, activity maps
  // are not typically updated via a general profile update DTO.
});

/**
 * TypeScript interface for the User Update DTO, inferred from the Zod schema.
 */
export type UserUpdateDTO = z.infer<typeof UserUpdateSchema>;
