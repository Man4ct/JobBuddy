import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import moment from 'moment';
dotenv.config();

import Job from './models/JobModel.js';
import User from './models/UserModel.js';
try {

  const startDate = moment('2023-01-01');
  const endDate = moment('2023-12-31');
  
  
  await mongoose.connect(process.env.MONGO_URL);
  // const user = await User.findOne({ email: 'john@gmail.com' });
  const jobs = await Job.find()

  for (const job of jobs) {
    const randomDate = moment(startDate + Math.random() * (endDate - startDate));
    await Job.findByIdAndUpdate(job._id, {
      $set: {
        createdAt: randomDate
      }
    })
  }


  console.log('Success!!!');
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}