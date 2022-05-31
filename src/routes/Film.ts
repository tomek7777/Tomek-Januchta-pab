import express from 'express';
import controller from '../controllers/Film';

const router = express.Router();

router.post('/create', controller.createFilm);
router.get('/get/:filmId', controller.readFilm);
router.get('/get', controller.readAll);
router.patch('/update/:filmId', controller.updateFilm);
router.delete('/delete/:filmId', controller.deleteFilm);

export = router;
