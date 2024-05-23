import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';
import { MyListModel } from '../models/myList';

// Mock user and items
const userId = 'user123';
const itemId1 = 'item123';
const itemId2 = 'item456';

beforeAll(async () => {
  if (!mongoose.connection.readyState) {
    await mongoose.connect('mongodb://localhost:27017/my-list-test-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
  }
});

afterAll(async () => {
  if (mongoose.connection.readyState) {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  }
});

beforeEach(async () => {
  await MyListModel.deleteMany({});
});

describe('My List API', () => {
  test('Add item to my list', async () => {
    const res = await request(app)
      .post('/api/my-list/add')
      .send({ userId, itemId: itemId1 });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Item added successfully');

    const list = await MyListModel.findOne({ userId });
    expect(list?.items).toContain(itemId1);
  });

  test('Remove item from my list', async () => {
    await MyListModel.create({ userId, items: [itemId1] });

    const res = await request(app)
      .post('/api/my-list/remove')
      .send({ userId, itemId: itemId1 });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Item removed successfully');

    const list = await MyListModel.findOne({ userId });
    expect(list?.items).not.toContain(itemId1);
  });

  test('List items in my list', async () => {
    await MyListModel.create({ userId, items: [itemId1, itemId2] });

    const res = await request(app)
      .get('/api/my-list/list')
      .query({ userId, page: 1, limit: 10 });

    expect(res.status).toBe(200);
    expect(res.body.items).toEqual([itemId1, itemId2]);
    expect(res.body.total).toBe(2);
  });
});
