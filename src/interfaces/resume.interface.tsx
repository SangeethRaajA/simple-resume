import { IEducation } from "./education.interface";
import { IWork } from "./work.interface";

export interface IResume {
  _id?: string;
  firstname?: string;
  lastname?: string;
  title?: string;
  street?: string;
  city?: string;
  state?: string;
  phone?: string;
  website?: string;
  mail?: string;
  objective?: string;
  work?: IWork;
  edu?: IEducation;
  achievement?: string[];
  skills?: string[];
  onClickDelete?: void;
}
