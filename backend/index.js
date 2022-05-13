import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './config/Database.js';
import UserRoute from './routes/UserRoute.js';

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(UserRoute);

// listen port
app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
