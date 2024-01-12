import { IEducation } from "./education.interface";
import { IWork } from "./work.interface";

export interface IResume {
  id?: string;
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
  work?: IWork[];
  edu?: IEducation[];
  achievements?: string[];
  skills?: string[];
  createdAt?: number;
  updatedAt?: number;
}
