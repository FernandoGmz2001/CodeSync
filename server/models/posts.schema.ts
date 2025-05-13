import { defineMongooseModel } from "#nuxt/mongoose";
import { Post, PostStatus } from "../utils/definitions";
import { UserSchema } from "./users.schema";

export const PostSchema = defineMongooseModel<Post>({
  name: "posts",
  schema: {
    // Custom Post ID - Can be generated or provided
    postId: {
      type: String,
      required: true,
      unique: true, // Ensure uniqueness for Post IDs
      index: true, // Add an index for faster lookups
    },
    // Foreign Key to the User model (Clerk User ID)
    authorClerkId: {
      type: String,
      ref: UserSchema.name, // Reference the 'users' collection
      required: true,
      index: true, // Index for faster lookups by author
    }, 
    // Title of the post
    title: {
      type: String,
      required: true,
    },
    // Description of the problem
    problemDescription: {
      type: String,
      required: true,
    },
    // Optional code snippet related to the problem
    codeSnippet: {
      type: String,
      required: false, // Code snippet is optional
    },
    // Programming language of the code snippet or problem
    language: {
      type: String,
      required: true,
    },
    // Array of tags associated with the post
    tags: {
      type: [String],
      default: [],
    },
    // Optional error message related to the problem
    errorMessage: {
      type: String,
      required: false, // Error message is optional
    },
    // Status of the post (e.g., 'open', 'solved', 'closed')
    status: {
      type: String,
      required: true,
      enum: PostStatus, // Define allowed statuses
      default: PostStatus.Open,
    },
    // Count of views the post has received
    viewCount: {
      type: Number,
      default: 0,
    },
    // Count of upvotes the post has received
    upvoteCount: {
      type: Number,
      default: 0,
    },
    // Count of downvotes the post has received
    downvoteCount: {
      type: Number,
      default: 0,
    },
    // Count of solutions submitted for the post
    solutionCount: {
      type: Number,
      default: 0,
    },
    // Optional Foreign Key to the accepted Solution model
    acceptedSolutionId: {
      type: String, // Storing ID as string
      // ref: SolutionSchema.name, // Reference the 'solutions' collection (uncomment if SolutionSchema is defined)
      required: false, // Accepted solution is optional
    },
    // Mongoose timestamps for createdAt and updatedAt
  },
  options: {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  },
});
