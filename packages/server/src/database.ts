import mongoose from 'mongoose';

export const connect = async () => {
  await mongoose.connect('mongodb://localhost:27017/react-form', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
};

export const disconnect = async () => {
  await mongoose.disconnect();
};