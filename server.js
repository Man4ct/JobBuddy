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

app.get('/jobs/:id', (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    res.status(404).json({ message: 'Job not found' });
    return;
  }
  res.status(200).json({ job });
});

app.post('/jobs', (req, res) => {
  const { position, company, location } = req.body;
  if (!position || !company || !location) {
    res.status(400).json({
      message: 'Please provide position, company and location',
    });
    return;
  }
  const id = nanoid(10);
  const job = { id, position, company, location };
  return res.status(201).json({ job });
});

app.patch('/jobs/:id', (req, res) => {
  const { id} = req.params;
  const { position,company, location } = req.body;

  if (!id) {
    res.status(400).json({
      message: 'Please provide an id'
    })
  }
  if (!position && !company &&!location) {
    res.status(400).json({
      message: 'Please provide at least one of position, company and location',
    });
    return;
  }
  const job = jobs.find((job) => job.id === id);
  job.company = company ? company : job.company;
  job.location = location ? location : job.location;
  job.position = position ? position : job.position;
  res.status(200).json({ msg: 'job modified', job });
})
const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log('server is running on port ' + port);
});
