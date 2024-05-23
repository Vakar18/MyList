import { Schema, model } from 'mongoose';

export interface User {
  id: string;
  username: string;
  preferences: {
    favoriteGenres: string[];
    dislikedGenres: string[];
  };
  watchHistory: Array<{
    contentId: string;
    watchedOn: Date;
    rating?: number;
  }>;
}

const userSchema = new Schema<User>({
  id: { type: String, required: true },
  username: { type: String, required: true },
  preferences: {
    favoriteGenres: { type: [String], required: true },
    dislikedGenres: { type: [String], required: true },
  },
  watchHistory: [
    {
      contentId: { type: String, required: true },
      watchedOn: { type: Date, required: true },
      rating: Number,
    },
  ],
});

export const UserModel = model<User>('User', userSchema);
