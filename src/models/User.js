import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  occumation: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
