import { MyListModel } from '../models/myList';

export class MyListService {
  static async addItem(userId: string, itemId: string) {
    const list = await MyListModel.findOne({ userId });
    if (!list) {
      await MyListModel.create({ userId, items: [itemId] });
    } else {
      if (!list.items.includes(itemId)) {
        list.items.push(itemId);
        await list.save();
      }
    }
  }

  static async removeItem(userId: string, itemId: string) {
    const list = await MyListModel.findOne({ userId });
    if (list) {
      list.items = list.items.filter(item => item !== itemId);
      await list.save();
    }
  }

  static async listItems(userId: string, page: number, limit: number) {
    const list = await MyListModel.findOne({ userId });
    if (!list) {
      return { items: [], total: 0, page, limit };
    }
    const total = list.items.length;
    const items = list.items.slice((page - 1) * limit, page * limit);
    return { items, total, page, limit };
  }
}
