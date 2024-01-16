
import { StatusCodes } from 'http-status-codes';
import UserModel from '../models/UserModel.js';
import JobModel from '../models/JobModel.js';

export const getCurrentUser = async (req, res) => {
    const user = await UserModel.findById(req.user.userId).lean()
  res.status(StatusCodes.OK).json({...user, password: undefined});
};

export const getApplicationStats = async (req, res) => {
    const users = await UserModel.countDocuments();
    const jobs = await JobModel.countDocuments();
    console.log('njing')
    res.status(StatusCodes.OK).json({ users, jobs });
  };

export const updateUser = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.user.userId, req.body);
    res.status(StatusCodes.OK).json({ msg: 'user updated' });
  };