import { StatusCodes } from 'http-status-codes';
import JobModel from '../models/JobModel.js';

export const getAllJobs = async (req, res) => {
  const jobs = await JobModel.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await JobModel.findById(id).lean();
  res.status(200).json({ job });
};

export const createJob = async (req, res) => {
  const job = await JobModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await JobModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });


  res.status(StatusCodes.OK).json({ job: updatedJob });
};
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await JobModel.findByIdAndDelete(id);

  res.status(StatusCodes.OK).json({ job: removedJob });
};
