import mongoose, { Document, Schema } from 'mongoose';

export interface IDirector {
    name: string;
}

export interface IDirectorModel extends IDirector, Document {}

const DirectorSchema: Schema = new Schema(
    {
        name: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IDirectorModel>('Director', DirectorSchema);
