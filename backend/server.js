import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //to parse incoming requests with JSON Payloads
app.use(cookieParser()); //to parse incoming requests with Cookies

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/users', userRoutes);


// app.get('/', (req, res) => {
// root route  http://localhost:5000/
//   res.send('Server is running!');
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
