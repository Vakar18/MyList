import { Schema, model } from 'mongoose';

export interface MyList {
  userId: string;
  items: string[]; // Array of item IDs (could be movie or TV show IDs)
}

const myListSchema = new Schema<MyList>({
  userId: { type: String, required: true, unique: true },
  items: { type: [String], required: true },
});

export const MyListModel = model<MyList>('MyList', myListSchema);
