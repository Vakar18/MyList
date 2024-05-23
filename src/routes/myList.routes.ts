import { Router } from 'express';
import { MyListController } from '../controllers/myList.controller';

const router = Router();

router.post('/add', MyListController.addItem);
router.post('/remove', MyListController.removeItem);
router.get('/list', MyListController.listItems);

export default router;
