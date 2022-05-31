import express from 'express';
import controller from '../controllers/Director';

const router = express.Router();

router.post('/create', controller.createDirector);
router.get('/get/:authorId', controller.readDirector);
router.get('/get', controller.readAll);
router.patch('/update/:authorId', controller.updateDirector);
router.delete('/delete/:authorId', controller.deleteDirector);

export = router;
