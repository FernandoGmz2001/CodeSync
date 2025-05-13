import { defineMongooseModel } from "#nuxt/mongoose";
import { User } from "../utils/definitions";

export const UserSchema = defineMongooseModel<User>({
  name: "users",
  schema: {
    // Clerk User ID - Used as the primary identifier from Clerk
    clerkUserId: {
      type: String,
      required: true,
      unique: true, // Ensure uniqueness for Clerk IDs
      index: true, // Add an index for faster lookups
    },
    // User's chosen username
    username: {
      type: String,
      required: true,
      unique: true, // Ensure uniqueness for usernames
    },
    // URL of the user's profile picture
    profilePictureUrl: {
      type: String,
      required: false, // Assuming profile picture might be optional initially
    },
    // User's biography or description
    bio: {
      type: String,
      required: false, // Bio is optional
    },
    // Array of strings representing the user's areas of expertise
    expertise: {
      type: [String],
      default: [], // Default to an empty array
    },
    // Points representing the user's reputation
    reputationPoints: {
      type: Number,
      default: 0, // Start with 0 reputation points
    },
    // Array of Post IDs bookmarked by the user
    bookmarkedPostIds: {
      type: [String], // Storing IDs as strings
      default: [],
    },
    // Map to store activity related to posts (e.g., upvotes, downvotes)
    postsActivity: {
      type: Map,
      of: Number, // Example: key could be postId, value could be activity type/count
      default: {}, // Default to an empty object
    },
    // Map to store activity related to solutions
    solutionsActivity: {
      type: Map,
      of: Number, // Example: key could be solutionId, value could be activity type/count
      default: {}, // Default to an empty object
    },
    // Mongoose timestamps for createdAt and updatedAt
  },
  options: {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  },
});
