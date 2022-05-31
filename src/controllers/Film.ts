import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Film from '../models/Film';

const createFilm = (req: Request, res: Response, next: NextFunction) => {
    const { title, description, director } = req.body;
    const film = new Film({
        _id: new mongoose.Types.ObjectId(),
        title,
        description,
        director
    });

    return film
        .save()
        .then((film) => res.status(201).json({ film }))
        .catch((error) => res.status(500).json({ error }));
};

const readFilm = (req: Request, res: Response, next: NextFunction) => {
    const filmId = req.params.filmId;

    return Film.findById(filmId)
        .populate('director')
        .then((film) => (film ? res.status(200).json({ film }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
    return Film.find()
        .populate('director')
        .then((films) => res.status(200).json({ films }))
        .catch((error) => res.status(500).json({ error }));
};

const updateFilm = (req: Request, res: Response, next: NextFunction) => {
    const filmId = req.params.filmId;

    return Film.findById(filmId)
        .then((film) => {
            if (film) {
                film.set(req.body);

                return film
                    .save()
                    .then((film) => res.status(201).json({ film }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
const deleteFilm = (req: Request, res: Response, next: NextFunction) => {
    const filmId = req.params.filmId;

    return Film.findByIdAndDelete(filmId)
        .then((film) => (film ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};
export default { createFilm, readFilm, readAll, updateFilm, deleteFilm };
