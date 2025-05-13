/**
 * Enum for the possible statuses of a Post.
 */
export enum PostStatus {
  Open = 'open',
  Solved = 'solved',
  Closed = 'closed',
}

/**
 * TypeScript interface for the User model.
 * Mirrors the structure of the Mongoose UserSchema.
 */
export interface User {
  /**
   * The unique ID from Clerk for the user.
   * Corresponds to clerkUserId in Mongoose schema.
   */
  clerkUserId: string;

  /**
   * The user's chosen username.
   * Corresponds to username in Mongoose schema.
   */
  username: string;

  /**
   * URL of the user's profile picture. Optional.
   * Corresponds to profilePictureUrl in Mongoose schema.
   */
  profilePictureUrl?: string;

  /**
   * User's biography or description. Optional.
   * Corresponds to bio in Mongoose schema.
   */
  bio?: string;

  /**
   * Array of strings representing the user's areas of expertise.
   * Corresponds to expertise in Mongoose schema.
   */
  expertise: string[];

  /**
   * Points representing the user's reputation.
   * Corresponds to reputationPoints in Mongoose schema.
   */
  reputationPoints: number;

  /**
   * Array of Post IDs bookmarked by the user.
   * Corresponds to bookmarkedPostIds in Mongoose schema.
   */
  bookmarkedPostIds: string[];

  /**
   * Map to store activity related to posts (e.g., upvotes, downvotes).
   * Key is postId, value is activity type/count (number).
   * Corresponds to postsActivity in Mongoose schema.
   */
  postsActivity: Map<string, number>;

  /**
   * Map to store activity related to solutions.
   * Key is solutionId, value is activity type/count (number).
   * Corresponds to solutionsActivity in Mongoose schema.
   */
  solutionsActivity: Map<string, number>;

  /**
   * Timestamp when the user document was created.
   * Automatically managed by Mongoose timestamps option.
   */
  createdAt: Date;

  /**
   * Timestamp when the user document was last updated.
   * Automatically managed by Mongoose timestamps option.
   */
  updatedAt: Date;
}

/**
 * TypeScript interface for the Post model.
 * Mirrors the structure of the Mongoose PostSchema.
 */
export interface Post {
  /**
   * The unique ID for the post.
   * Corresponds to postId in Mongoose schema.
   */
  postId: string;

  /**
   * The Clerk User ID of the author. Foreign key referencing the User model.
   * Corresponds to authorClerkId in Mongoose schema.
   */
  authorClerkId: string;

  /**
   * Denormalized author username for display.
   * Corresponds to authorUsername in Mongoose schema.
   */
  authorUsername: string;

  /**
   * Denormalized author profile picture URL. Optional.
   * Corresponds to authorProfilePictureUrl in Mongoose schema.
   */
  authorProfilePictureUrl?: string;

  /**
   * Title of the post.
   * Corresponds to title in Mongoose schema.
   */
  title: string;

  /**
   * Description of the problem.
   * Corresponds to problemDescription in Mongoose schema.
   */
  problemDescription: string;

  /**
   * Optional code snippet related to the problem.
   * Corresponds to codeSnippet in Mongoose schema.
   */
  codeSnippet?: string;

  /**
   * Programming language of the code snippet or problem.
   * Corresponds to language in Mongoose schema.
   */
  language: string;

  /**
   * Array of tags associated with the post.
   * Corresponds to tags in Mongoose schema.
   */
  tags: string[];

  /**
   * Optional error message related to the problem.
   * Corresponds to errorMessage in Mongoose schema.
   */
  errorMessage?: string;

  /**
   * Status of the post (e.g., 'open', 'solved', 'closed').
   * Uses the PostStatus enum.
   * Corresponds to status in Mongoose schema.
   */
  status: PostStatus;

  /**
   * Count of views the post has received.
   * Corresponds to viewCount in Mongoose schema.
   */
  viewCount: number;

  /**
   * Count of upvotes the post has received.
   * Corresponds to upvoteCount in Mongoose schema.
   */
  upvoteCount: number;

  /**
   * Count of downvotes the post has received.
   * Corresponds to downvoteCount in Mongoose schema.
   */
  downvoteCount: number;

  /**
   * Count of solutions submitted for the post.
   * Corresponds to solutionCount in Mongoose schema.
   */
  solutionCount: number;

  /**
   * Optional ID of the accepted solution. Foreign key referencing the Solution model.
   * Corresponds to acceptedSolutionId in Mongoose schema.
   */
  acceptedSolutionId?: string; // Assuming Solution IDs are strings

  /**
   * Timestamp when the post document was created.
   * Automatically managed by Mongoose timestamps option.
   */
  createdAt: Date;

  /**
   * Timestamp when the post document was last updated.
   * Automatically managed by Mongoose timestamps option.
   */
  updatedAt: Date;
}
