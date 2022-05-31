import mongoose, { Document, Schema } from 'mongoose';

export interface iFilm {
    title: string;
    description: string;
    director: string;
}

export interface iFilmModel extends iFilm, Document {}

const FilmSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        director: { type: Schema.Types.ObjectId, required: true, ref: 'Director' }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<iFilmModel>('Film', FilmSchema);
