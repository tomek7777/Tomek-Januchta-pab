import express from 'express';
import controller from '../controllers/Director';

const router = express.Router();

router.post('/create', controller.createDirector);
router.get('/get/:directorId', controller.readDirector);
router.get('/get', controller.readAll);
router.patch('/update/:directorId', controller.updateDirector);
router.delete('/delete/:directorId', controller.deleteDirector);

export = router;
