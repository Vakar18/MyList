import { Schema, model } from 'mongoose';

export interface Episode {
  episodeNumber: number;
  seasonNumber: number;
  releaseDate: Date;
  director: string;
  actors: string[];
}

export interface TVShow {
  id: string;
  title: string;
  description: string;
  genres: string[];
  episodes: Episode[];
}

const episodeSchema = new Schema<Episode>({
  episodeNumber: { type: Number, required: true },
  seasonNumber: { type: Number, required: true },
  releaseDate: { type: Date, required: true },
  director: { type: String, required: true },
  actors: { type: [String], required: true },
});

const tvShowSchema = new Schema<TVShow>({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  genres: { type: [String], required: true },
  episodes: { type: [episodeSchema], required: true },
});

export const TVShowModel = model<TVShow>('TVShow', tvShowSchema);
