import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import { nanoid } from 'nanoid';
const app = express();

let jobs = [
  {
    id: nanoid(),
    position: 'Software Engineer',
    company: 'Amazon',
    location: 'San Francisco, CA',
  },
  {
    id: nanoid(),
    position: 'Frontend Developer',
    company: 'Google',
    location: 'Jakarta, Indonesia',
  },
];

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/jobs', (req, res) => {
  res.status(200).json({ jobs });
});
const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log('server is running on port ' + port);
});
