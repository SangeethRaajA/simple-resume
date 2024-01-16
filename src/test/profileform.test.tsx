import ProfileForm from "../components/molecules/Form/ProfileForm";
import { render, screen, fireEvent } from "@testing-library/react";

describe("ProfileForm component", () => {
  const mockResumeData = {
    firstname: "John",
    lastname: "Kennedy",
    title: "UI Designer",
    street: "18/B",
    state: "Queens Street",
    city: "London",
    phone: "4565 565 5659",
    website: "kenndy.com",
    mail: "jkennedy@gmail.com",
  };

  it("renders the ProfileForm component with correct data", () => {
    render(<ProfileForm {...mockResumeData} updateFields={() => {}} />);

    // Check if the form fields are rendered with correct values
    expect(screen.getByLabelText("First Name")).toHaveValue("John");
    expect(screen.getByLabelText("Last Name")).toHaveValue("Kennedy");
    expect(screen.getByLabelText("Title")).toHaveValue("UI Designer");
    expect(screen.getByLabelText("Address Line 01")).toHaveValue("18/B");
    expect(screen.getByLabelText("Address Line 02")).toHaveValue(
      "Queens Street"
    );
    expect(screen.getByLabelText("Address Line 03")).toHaveValue("London");
    expect(screen.getByLabelText("Contact")).toHaveValue("4565 565 5659");
    expect(screen.getByLabelText("Website")).toHaveValue("kenndy.com");
    expect(screen.getByLabelText("Mail")).toHaveValue("jkennedy@gmail.com");
  });
});