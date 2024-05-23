import { Request, Response } from 'express';
import { MyListService } from '../services/myList.service';

export class MyListController {
  static async addItem(req: Request, res: Response) {
    const { userId, itemId } = req.body;
    try {
      await MyListService.addItem(userId, itemId);
      res.status(200).send({ message: 'Item added successfully' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send({ error: error.message });
      } else {
        res.status(500).send({ error: 'An unknown error occurred' });
      }
    }
  }

  static async removeItem(req: Request, res: Response) {
    const { userId, itemId } = req.body;
    try {
      await MyListService.removeItem(userId, itemId);
      res.status(200).send({ message: 'Item removed successfully' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send({ error: error.message });
      } else {
        res.status(500).send({ error: 'An unknown error occurred' });
      }
    }
  }

  static async listItems(req: Request, res: Response) {
    const { userId, page = 1, limit = 10 } = req.query;
    try {
      const items = await MyListService.listItems(userId as string, Number(page), Number(limit));
      res.status(200).send(items);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send({ error: error.message });
      } else {
        res.status(500).send({ error: 'An unknown error occurred' });
      }
    }
  }
}
