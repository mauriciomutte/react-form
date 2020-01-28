import mongoose from 'mongoose';
import  { MongoMemoryServer } from 'mongodb-memory-server';

import User from '../src/models/User';

describe('Testing database (MongoDB)', () => {
  let mongoServer:any;

  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const URI = await mongoServer.getUri();

    mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
  });

  afterAll(async () => {
    mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('Should be able to create new users', async () => {
    await User.create({
      name: 'Maithê',
      cep: '94085010',
      street: 'Afonso Pena',
      number: '185',
      neighborhood: 'Vale do Sol',
      city: 'Gravataí',
      uf: 'RS'
    });

    const list = await User.find({});

    expect(list).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Maithê',
        }),
      ]),
    );
  });
})