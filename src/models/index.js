import mongoose from 'mongoose';
 
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true});
};
 
connectDb().then(async () => {
  console.log('Database connection successfully');
});

  