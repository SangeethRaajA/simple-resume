import { IResume } from "../../interfaces/resume.interface";
import { axiosClient } from "../axiosClient";

// Add Resume Service
const addResumeService = (resumes: IResume) => {
  return axiosClient.post("/resume/add", JSON.stringify(resumes));
};

// Get All Resumes Service
const getAllResumesService = () => {
  return axiosClient.get("/list");
};

// Get Resume by Id Service
const getResumeByIdService = (id?: string) => {
  return axiosClient.get(`/${id}`);
};

// Update Resume Service
const updateResumeService = (resume: IResume) => {
  return axiosClient.post("/update", JSON.stringify(resume));
};

// Delete Resume Service
const deleteResumeService = (id: string) => {
  return axiosClient.delete(`/delete/${id}`);
};

export {
  addResumeService,
  getAllResumesService,
  getResumeByIdService,
  updateResumeService,
  deleteResumeService,
};
