import React, { useState } from "react";
import { IResume } from "../../../interfaces/resume.interface";
import { useFormik } from "formik";

interface FormProps {
  onSubmit: (data: IResume) => void;
}

const initialValues: IResume = {
  firstname: "",
  lastname: "",
  title: "",
  street: "",
  city: "",
  state: "",
  phone: "",
  website: "",
  mail: "",
  objective: "",
};
// const ProfileInput = () => {
function ProfileInput({ onSubmit }: FormProps) {
  const [formData, setFormData] = useState<IResume>({
    firstname: "",
    lastname: "",
    title: "",
    street: "",
    city: "",
    state: "",
    phone: "",
    website: "",
    mail: "",
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Address Line 01:
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Address Line 02:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Address Line 01:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Website:
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Mail:
          <input
            type="mail"
            name="mail"
            value={formData.mail}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ProfileInput;
