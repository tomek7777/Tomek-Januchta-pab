import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Director from '../models/Director';

const createDirector = (req: Request, res: Response, next: NextFunction) => {
    const director = new Director({
        _id: new mongoose.Types.ObjectId(),
        name
    });

    return director
        .save()
        .then((director) => res.status(201).json({ director }))
        .catch((error) => res.status(500).json({ error }));
};

const readDirector = (req: Request, res: Response, next: NextFunction) => {
    const directorId = req.params.directorId;

    return Director.findById(directorId)
        .then((director) => (director ? res.status(200).json({ director }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
    return Director.find()
        .then((directors) => res.status(200).json({ directors }))
        .catch((error) => res.status(500).json({ error }));
};

const updateDirector = (req: Request, res: Response, next: NextFunction) => {
    const directorId = req.params.directorId;

    return Director.findById(directorId).then((director) => {
        if (director) {
            director.set(req.body);

            return director
                .save()
                .then((director) => res.status(201).json({ director }))
                .catch((error) => res.status(500).json({ error }));
        } else {
            res.status(404).json({ message: 'Not found' });
        }
    });
};
const deleteDirector = (req: Request, res: Response, next: NextFunction) => {
    const directorId = req.params.directorId;

    return Director.findByIdAndDelete(directorId)
        .then((director) => (director ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};
export default { createDirector, readDirector, readAll, updateDirector, deleteDirector };
